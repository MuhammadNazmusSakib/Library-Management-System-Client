import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Banner = () => {
    const slides = [
      {
        id: 1,
        title: "Welcome to the Library",
        description: "Explore a wide collection of books and resources.",
        image: "https://i.ibb.co.com/BgJtmZ3/Welcome-to-the-Library.jpg",
      },
      {
        id: 2,
        title: "Easy Borrowing",
        description: "Borrow and return books with just a few clicks.",
        image: "https://i.ibb.co.com/4PS44L1/Easy-Borrowing.jpg",
      },
      {
        id: 3,
        title: "New Arrivals",
        description: "Check out the latest additions to our collection.",
        image: "https://i.ibb.co.com/BKhHF0V/New-Arrivals.jpg",
      },
    ];
  
    return (
      <div className="banner w-full bg-gray-100">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-[400px] flex items-center justify-center text-white">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bg-black bg-opacity-50 p-4 rounded-lg text-center max-w-lg">
                  <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default Banner;
  