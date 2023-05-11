import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/swiper.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Image from 'next/image'
import styles from '../styles/Projects.module.scss'

import art_1 from '../public/projects/draws/art1.png'
import art_2 from '../public/projects/draws/art2.png'
import art_3 from '../public/projects/draws/art3.png'
import art_4 from '../public/projects/draws/art4.png'
import art_5 from '../public/projects/draws/art5.png'

import '../i18n'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

export default function ArtProjects() {
  const { t } = useTranslation()
  return (
    <div className={styles.ProjectOppositeContainer}>
      <div className={styles.SwiperContainer}>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          slidesPerView={1}
          className={styles.Swiper}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className={styles.ImgContainer}>
            <Image
              src={art_2}
              alt="art_2 Pic"
              priority="true"
              width={350}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.ImgContainer}>
            <Image
              src={art_1}
              alt="art_1 Pic"
              priority="true"
              width={350}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.ImgContainer}>
            <Image
              src={art_3}
              alt="art_3 Pic"
              priority="true"
              width={350}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.ImgContainer}>
            <Image
              src={art_4}
              alt="art_4 Pic"
              priority="true"
              width={300}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.ImgContainer}>
            <Image
              src={art_5}
              alt="art_5 Pic"
              priority="true"
              width={300}
              height={300}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.Description}>
        <h2>{t('project-art-h2')}</h2>
        <div className={styles.Link}>
          <a
            href="https://www.pixiv.net/users/12573474/artworks"
            target="_blank"
          >
            Pixiv
          </a>
        </div>
        <p>
          <Trans i18nKey="project-art-p1">
            The digital artworks that drawn by myself. I'm currently using
            <b>Clip Studio Paint</b> to draw.
          </Trans>
        </p>
        <p>{t('project-art-p2')}</p>
        <p>{t('project-art-p3')}</p>
      </div>
    </div>
  )
}
