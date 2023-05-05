import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/swiper.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Image from 'next/image'
import styles from '../styles/MainSwiper.module.scss'
import draw from '../public/homepage/draw.png'
import dear from '../public/homepage/dear.jpg'
import ua1_5 from '../public/homepage/ua1_5.png'
import tetris from '../public/homepage/tetris.png'

export default function MainSwiper() {
  return (
    <div className={styles.Container}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        className={styles.Swiper}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className={styles.ImgContainer}>
          <Image src={draw} alt="Draw Pic" priority="true" width={500} />
        </SwiperSlide>
        <SwiperSlide className={styles.ImgContainer}>
          <Image src={dear} alt="RPG game Pic" priority="true" width={700} />
        </SwiperSlide>
        <SwiperSlide className={styles.ImgContainer}>
          <Image
            src={ua1_5}
            alt="Minecraft map Pic"
            priority="true"
            width={700}
            object-fit="fill"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.ImgContainer}>
          <Image
            src={tetris}
            alt="Tetris game Pic"
            priority="true"
            width={700}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
