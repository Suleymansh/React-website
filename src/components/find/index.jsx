import styles from "./index.module.css";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import Card from "./Card";

import Slider from "react-slick";

const Find = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1> Find your drive</h1>
        <div className={styles.text_bg}>
          <p>
            <span> Lorem ipsum dolor sit amet consectetur.</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        {/* burda swiper istifade olunub  */}
        {/* <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={5}
          navigation
          breakpoints={{
            // When window with is 340
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // When window with is 768
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // When window with is 1048
            1048: {
              width: 1048,
              slidesPerView: 5,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
             <Slider {...settings}>
            <Card
              image="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
              brand="BMW"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              brand="BMW"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              brand="BMW"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
              brand="BMW"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1618353482480-61ca5a9a7879?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              brand="BMW"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1549927681-0b673b8243ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              brand="BMW"
            />
          </SwiperSlide>
        </Swiper> */}
        {/* burda react-slick istifade olunub */}
        <Slider {...settings}>
          <Card
            image="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
            brand="BMW"
          />

          <Card
            image="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            brand="BMW"
          />

          <Card
            image="https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            brand="BMW"
          />

          <Card
            image="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
            brand="BMW"
          />

          <Card
            image="https://images.unsplash.com/photo-1618353482480-61ca5a9a7879?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            brand="BMW"
          />

          <Card
            image="https://images.unsplash.com/photo-1549927681-0b673b8243ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            brand="BMW"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Find;
