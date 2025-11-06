import React from 'react';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import oneTree from '../assets/onetree.png';
import treeFifty from '../assets/50tree.png';
import treeHoundred from '../assets/100tree.png'
import treeTwoHoundred from '../assets/200tree.png';
import treeFourHoundred from '../assets/400tree.png';
import styles from './SwiperCard.module.css';
import Card from './Card';




const SwiperCardData = [
  {
    title: "Starter Tree",
    paragraph: "1 tree",
    price: "150",
    imgURL: oneTree,
  },
  {
    title: "Impact Grove",
    paragraph: "50 tree",
    price: "7.250",
    imgURL: treeFifty,
  },
  {
    title: "Carbon Circle",
    paragraph: "100 tree",
    price: "14.000",
    imgURL: treeHoundred,
  },
  {
    title: "Green Legacy",
    paragraph: "200 tree",
    price: "27.000",
    imgURL: treeTwoHoundred,
  },
  {
    title: "Forest Partner",
    paragraph: "400 tree",
    price: "52.000",
    imgURL: treeFourHoundred,
  },
];


const SwiperCard = () => {
  return (
    <div className={styles.swiperCardMain}>   
      <Swiper
     
        slidesPerView={4}
        spaceBetween={50}
        // Modules
        modules={[Pagination]}
        pagination={{ clickable: true }}
        grabCursor={true}
        className="mySwiper"
  
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
        
        {SwiperCardData.map((card, index) => (
          <SwiperSlide key={index}>
            <Card 
              imgURL={card.imgURL}
              title={card.title}
              paragraph={card.paragraph}
              price={card.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;