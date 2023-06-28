import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

import Btn1 from "../Btn/btn1";
import bannimp1 from "../../assets/img/covers/fsd4.gif";
import bannimp2 from "../../assets/img/covers/fsd5.gif";

const Banner = () => {
  return (
    <div className="container relative pl-[1rem] -mt-[1rem] gap-5">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 9000, // 5 seconds
          disableOnInteraction: false, // continue autoplay after user interaction
        }}
      >
        
 
          {/* banner-1 */}
          <SwiperSlide>
            <div className="banner-slide  relative float-left h-[30rem] w-[95rem] p-[6rem] rounded-[1rem] bg-white grid-template-columns ">
              <div className="banner-content">
                <h3 className="text-5xl font-bold  text-black">Become a tutor</h3>
                <p className="2xl leading-8 pt-10 mr-[40rem] text-black text-left">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  tempora nulla enim suscipit! Exercitationem, minus asperiores,
                  culpa eaque quis deserunt velit nulla modi officiis cum
                  voluptates ducimus natus aliquid molestias?
                </p>
                <img
                  className="absolute top-0 w-[40rem] h-[25rem] rounded-lg object-cover mt-[3rem] ml-[45rem]"
                  src={bannimp2}
                  alt="Banner 1"
                />
                <div className="mt-10">
                  <Btn1 />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* banner-2 */}
          <SwiperSlide>
            <div className="banner-slide  relative float-left h-[30rem] w-[95rem]  p-[6rem] rounded-[1rem] bg-white grid-template-columns  ">
              <div className="banner-content ">
                <h3 className="text-5xl font-bold  text-black">Explore Courses</h3>
                <p className="2xl leading-8 pt-10 mr-[40rem] text-black text-left">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  tempora nulla enim suscipit! Exercitationem, minus asperiores,
                  culpa eaque quis deserunt velit nulla modi officiis cum
                  voluptates ducimus natus aliquid molestias?
                </p>
                <img
                  className="absolute top-0 w-[40rem] h-[25rem] rounded-lg object-cover mt-[3rem] ml-[45rem]"
                  src={bannimp1}
                  alt="Banner 2"
                />
                <div className="mt-10">
                  <Btn1 />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* banner-3 */}
          <SwiperSlide>
            <div className="banner-slide relative float-left h-[30rem] w-[95rem] p-[6rem] rounded-[1rem] bg-white grid-template-columns ">
              <div className="banner-content ">
                <h3 className="text-5xl font-bold  text-black">Enroll Today</h3>
                <p className="2xl leading-8 pt-10 mr-[40rem] text-black text-left">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  tempora nulla enim suscipit! Exercitationem, minus asperiores,
                  culpa eaque quis deserunt velit nulla modi officiis cum
                  voluptates ducimus natus aliquid molestias?
                </p>
                <img
                  className="absolute top-0 w-[40rem] h-[25rem] rounded-lg object-cover mt-[3rem] ml-[45rem]"
                  src={bannimp1}
                  alt="Banner 3"
                />
                <div className="mt-10">
                  <Btn1 />
                </div>
              </div>
            </div>
          </SwiperSlide>
     
      </Swiper>
    </div>
  );
};

export default Banner;
