import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import { PromotionsBanners } from "../PromotionsBanners";

import { bannersForPromotions } from "../../mocks/bannersForPromotions";

import styles from "./Banner.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function Banner() {
  return (
    <div className={styles.container}>
      <Swiper
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        loop
      >
        {bannersForPromotions.map((banner) => (
          <SwiperSlide key={banner.id}>
            <PromotionsBanners
              imgMobile={banner.imgMobile}
              imgDesktop={banner.imgDesktop}
              title={banner.title}
              subTitle={banner.subTitle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
