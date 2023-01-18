import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import slider2 from "../../Assets/slider2.png";

export default function Slider() {
  return (
    <div style={{ maxWidth: "100%", margin: "auto" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ maxHeight: " 90vh" }}>
          <video autoPlay muted loop>
            <source
              src="https://images.samsung.com/is/content/samsung/assets/in/home-2023/Home_DM_Invitation_KV_1440x640_pc.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: " 90vh" }}>
          <img
            alt="2"
            src={slider2}
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: " 90vh" }}>
          <img
            alt="3"
            src="https://oasis.opstatics.com/content/dam/oasis/page/2022/new-homepage/in/store/large-card-product/LargeCardProduct_PC_10t.jpg.thumb.webp"
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: " 90vh" }}>
          <img
            alt="4"
            src="https://images.samsung.com/is/image/samsung/assets/in/home/firstlook/2023_Family_KV_Horizontal_notxt_v1.1.jpg"
            width={"100%"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};