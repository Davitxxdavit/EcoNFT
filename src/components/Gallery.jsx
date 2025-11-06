import React from 'react';
import styles from './Gallery.module.css';
import emission from '../assets/video.6f154e78e4ed9b0d18d1.mp4';
import CustomVideoPlayer from './CustomVideoPlayer';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
        <div className={styles.galleryInner}>
            <h2>Video Gallery Of GreWeCo</h2>
            <div className={styles.galleryWrapper}>
                <div className={styles.galleryItem}>
                    <p>GreWeCo Intro</p>
                    <div className={styles.videoWrapper}>
                        <iframe className={styles.youtubeVideo} src="https://www.youtube.com/embed/zlx0B12LA_o?si=UrtQ2XLcJScpm_at" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                 <div className={styles.galleryItem}>
                    <p>Paulownia Plantation at Guria</p>
                    <div className={styles.videoWrapper}>
                        <iframe className={styles.youtubeVideo} src="https://www.youtube.com/embed/p-udtvGXWuY?si=PBCHJXKBUK-2oauc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                 <div className={styles.galleryItem}>
                    <p>Research on Carbon Dioxide GrowthWorldwide</p>
                    <div className={styles.videoWrapper}>
                        <CustomVideoPlayer 
                        src={emission}
                    

                        />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Gallery
