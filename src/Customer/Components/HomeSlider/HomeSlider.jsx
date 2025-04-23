import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import '../../../App.css';
import { Box } from "@mui/material";

const slidersData = [
  {
    id: 1,
    name: "slider1",
    img: "https://www.boat-lifestyle.com/cdn/shop/files/ION_Banner_WEB_f2f301b9-04e1-41f9-b424-a024680e6acc_1600x.jpg?v=1727264228",
  },
  {
    id: 2,
    name: "slider2",
    img: "https://www.boat-lifestyle.com/cdn/shop/files/web_47453a27-f192-43f9-9eb3-c398566a645a_1440x.png?v=1739988457",
  },
  {
    id: 3,
    name: "slider3",
    img: "https://www.boat-lifestyle.com/cdn/shop/files/Banner-desk_1440x.jpg?v=1740377858",
  },
];

const HomeSlider = () => {
  return (
    <div className="!flex !justify-center !items-center !w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // ✅ Include Autoplay
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // ✅ Infinite looping
        autoplay={{
          delay: 3000, // ✅ 3-second duration
          disableOnInteraction: false, // Keeps autoplay active after user interaction
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {slidersData.slice(0, 4).map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="!flex !justify-center !items-center !rounded-md !overflow-hidden h-[470px] !w-full">
              <img
                src={item.img}
                alt={`Slide ${index + 1}`}
                className="!shadow-md !w-full !h-full !object-cover"
                loading="lazy" // Lazy load each image
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
