import React, { useRef, useState, useEffect, useCallback } from 'react';
import styles from './CustomVideoPlayer.module.css';

const CustomVideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  // State variables
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0); 
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // Controls start visible, as the video is initially paused.
  const [controlsVisible, setControlsVisible] = useState(true); 

  // --- Helper Functions ---

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return '00:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // --- Video Control Handlers ---

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
      setVolume(video.muted ? 0 : video.volume || 1);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    const video = videoRef.current;
    if (video) {
      video.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const handleProgressChange = (event) => {
    const newProgress = parseFloat(event.target.value);
    const video = videoRef.current;
    if (video) {
      const newTime = (newProgress / 100) * duration;
      video.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  const toggleFullScreen = () => {
    const playerContainer = videoRef.current.parentElement.parentElement;
    if (playerContainer.requestFullscreen) {
      playerContainer.requestFullscreen();
    }
  };

  // --- Mouse/Visibility Logic ---

  const handleMouseMove = useCallback(() => {
    // 1. Always make controls visible on mouse movement.
    setControlsVisible(true);

    // 2. Clear any existing hiding timeout.
    if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
    }

    // 3. ONLY set a new timeout to hide controls if the video is CURRENTLY PLAYING.
    if (isPlaying) {
        controlsTimeoutRef.current = setTimeout(() => {
            setControlsVisible(false);
        }, 3000); // Hide after 3 seconds of inactivity
    }
  }, [isPlaying]);

  const handleMouseLeave = () => {
    // Clear the hiding timeout when leaving the area
    if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
    }
    // ONLY hide immediately if the video is playing.
    if (isPlaying) {
        setControlsVisible(false);
    }
    // If paused, controls remain visible (as set by the 'pause' event listener).
  };
  
  const handleMouseEnter = () => {
    // Ensure controls are visible when mouse enters
    setControlsVisible(true);
    // The handleMouseMove logic will take over from here to manage the timeout
  };
  
  // --- Native Video Event Listeners (Effects) ---

  const onTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      const newTime = video.currentTime;
      const newProgress = (newTime / duration) * 100 || 0;
      setCurrentTime(newTime);
      setProgress(newProgress);
    }
  }, [duration]);

  const onLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
    }
  }, []);

  const onEnded = useCallback(() => {
    setIsPlaying(false);
    setProgress(100);
    setControlsVisible(true); // Show controls at the end of the video
  }, []);

  // Effect to bind and clean up native video events
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // Initial state sync
      setVolume(videoElement.volume);
      setIsMuted(videoElement.muted);

      // Attach Event Listeners
      videoElement.addEventListener('timeupdate', onTimeUpdate);
      videoElement.addEventListener('loadedmetadata', onLoadedMetadata);
      videoElement.addEventListener('ended', onEnded);
      
      // State updates for play/pause
      videoElement.addEventListener('play', () => {
          setIsPlaying(true);
          // Start the hiding timer immediately upon play
          controlsTimeoutRef.current = setTimeout(() => {
              setControlsVisible(false);
          }, 3000);
      }); 
      videoElement.addEventListener('pause', () => {
          setIsPlaying(false);
          setControlsVisible(true); // Controls must be visible when paused
          // Clear any hiding timeout
          if (controlsTimeoutRef.current) {
             clearTimeout(controlsTimeoutRef.current);
          }
      });
    }

    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', onTimeUpdate);
        videoElement.removeEventListener('loadedmetadata', onLoadedMetadata);
        videoElement.removeEventListener('ended', onEnded);
        videoElement.removeEventListener('play', () => setIsPlaying(true));
        videoElement.removeEventListener('pause', () => {
            setIsPlaying(false);
            setControlsVisible(true);
        });
      }
    };
  }, [onTimeUpdate, onLoadedMetadata, onEnded]);


  return (
    <div className={styles.container}>
      <div 
        className={styles.wrapper} 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter} // Important for triggering visibility
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          controls={false} 
          className={styles.videoElement}
        />

        {/* --- Custom Controls Overlay --- */}
        <div 
          className={styles.controls} 
          style={{ 
            opacity: controlsVisible ? 1 : 0, 
            pointerEvents: controlsVisible ? 'auto' : 'none' 
          }}
        >
          
          {/* Progress Bar Container */}
          <div className={styles.progressBarContainer}>
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progress}
              // Stop propagation to prevent range clicks from also triggering the video play/pause on the wrapper
              onChange={(e) => { e.stopPropagation(); handleProgressChange(e); }} 
              className={styles.progressSlider}
              aria-label="Video seek progress"
            />
          </div>

          <div className={styles.controlsRow}>
            {/* Play/Pause Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); togglePlay(); }} 
              className={styles.controlButton}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸︎' : '▶︎'}
            </button>

            {/* Time Display */}
            <div className={styles.timeDisplay}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            {/* Volume Control */}
            <div className={styles.volumeControl}>
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleMute(); }} 
                  className={styles.controlButton}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                    {isMuted || volume === 0 ? '🔇' : '🔊'}
                </button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => { e.stopPropagation(); handleVolumeChange(e); }}
                    className={styles.volumeSlider}
                    aria-label="Volume control"
                />
            </div>

            {/* Fullscreen Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); toggleFullScreen(); }} 
              className={styles.controlButton}
              aria-label="Toggle full screen"
            >
                ⛶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;