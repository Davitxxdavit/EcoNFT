import React from 'react';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Component and asset imports
import TeamMember from './TeamMember';
import styles from './SwiperTeam.module.css';
import member1 from '../assets/member1.png';
import member2 from '../assets/member2.png';
import member3 from '../assets/member3.png';
import member4 from '../assets/member4.png';
import member5 from '../assets/member5.png';

// Store team data in an array of objects
const teamData = [
  {
    bgImage: member1,
    name: "Zurab Meskhidze",
    about: "Businessman, Entrepreneur, Founder.",
    job: "CEO & Co-founder",
    link: "https://www.linkedin.com/in/zmeskhidze/",
  },
  {
    bgImage: member4,
    name: "Eric D. Wade",
    about: "Leading the company's growth and partnerships from scratch.",
    job: "CTO & Co-founder",
    link: "https://www.linkedin.com/in/eric-dean-wade-5ab67857/",
  },
  {
    bgImage: member2,
    name: "Angela Davis",
    about: "Driving the technical innovations and platform development.",
    job: "CFO & Co-Founder",
    link: "https://www.linkedin.com/in/angela-davis-629aa9102/",
  },
  {
    bgImage: member3,
    name: "Steve Finikiotis",
    about: "Growing the brand and engaging customers with innovative strategies.",
    job: "Advisor",
    link: "https://www.linkedin.com/in/stevefinikiotis/",
  },
  {
    bgImage: member5,
    name: "Andrey Didenko",
    about: "Growing the brand and engaging customers with innovative strategies.",
    job: "Botanist & Advisor",
    link: "/", // Note: This link was a duplicate in your original code
  },
];


const SwiperTeam = () => {
  return (
    <div className={styles.swiperTeam} id='team'>   
      <Swiper
        // Base settings (for screens wider than the largest breakpoint)
        slidesPerView={4}
        spaceBetween={50}
        // Modules
        modules={[Pagination]}
        pagination={{ clickable: true }}
        grabCursor={true}
        className="mySwiper"
        // Responsive breakpoints
        breakpoints={{
          120: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {/* Map over the data array to generate slides dynamically */}
        {teamData.map((member, index) => (
          <SwiperSlide key={index}>
            <TeamMember 
              bgImage={member.bgImage}
              name={member.name}
              about={member.about}
              job={member.job}
              click={() => window.open(member.link, '_blank')}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperTeam;