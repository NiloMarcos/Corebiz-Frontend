import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { ProductCard } from "./ProductCards";

import { useFetch } from "../../hooks/useFetch";

import styles from "./Product.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Installment {
  quantity: number;
  value: number;
}

interface IProductCards {
  productId: number;
  imageUrl: string;
  installments: Array<Installment>;
  listPrice: number;
  imgProduct: string;
  price: number;
  productName: string;
  stars: number;
}

export function Products() {
  const { data } = useFetch<IProductCards[]>("products");

  const isMobile = window.innerWidth <= 1024;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mais Vendidos</h2>
      <p className={styles.line}>{""}</p>
      <Swiper
        slidesPerView={"auto"}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        navigation={{
          enabled: !isMobile,
        }}
        pagination={isMobile ? { clickable: true } : false}
        modules={[Autoplay, Navigation, Pagination]}
        loop
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {data?.map((product) => (
          <SwiperSlide className={styles.swiperSlide} key={product.productId}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
