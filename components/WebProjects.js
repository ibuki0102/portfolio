import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/swiper.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Image from 'next/image'
import styles from '../styles/Projects.module.scss'

import tetris from '../public/homepage/tetris.png'
import twitter from '../public/projects/website/twitter.png'
import portfolio from '../public/projects/website/portfolio.png'

import '../i18n'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

export default function WebProjects() {
  const { t } = useTranslation()
  return (
    <div className={styles.ProjectContainer}>
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
              src={tetris}
              alt="tetris Pic"
              priority="true"
              width={400}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.ImgContainer}>
            <Image
              src={twitter}
              alt="twitter Pic"
              priority="true"
              width={500}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.ImgContainer}>
            <Image
              src={portfolio}
              alt="portfolio Pic"
              priority="true"
              width={450}
              height={300}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.Description}>
        <h2>{t('project-website-h2')}</h2>
        <div className={styles.Link}>
          <a href="https://codepen.io/bigfrog0102/pens/public" target="_blank">
            Codepen
          </a>
          <a href="https://github.com/ibuki0102" target="_blank">
            Github
          </a>
        </div>
        <p>
          <Trans i18nKey="project-website-tetris">
            <b>Tetris Game</b>: A simple game made by using html/css/javascript,
            it's a sideproject that I used to review the basics.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="project-website-twitter">
            <b>Simple Twitter</b>: A cooperation project which was my graduation
            project at Alpha Camp, it just like a simple version of real
            Twitter.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="project-website-portfolio">
            <b>Portfolio Website</b>: A website to display the projects that I
            have participated, which not only includes website project.
          </Trans>
        </p>
      </div>
    </div>
  )
}
