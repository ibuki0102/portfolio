import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/swiper.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Image from 'next/image'
import styles from '../styles/Projects.module.scss'

import dear from '../public/homepage/dear.jpg'
import jiraiya from '../public/projects/translated_game/jiraiya.png'

import '../i18n'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

export default function RpgProjects() {
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
              src={dear}
              alt="dear Pic"
              priority="true"
              width={400}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.ImgContainer}>
            <Image
              src={jiraiya}
              alt="jiraiya Pic"
              priority="true"
              width={500}
              height={300}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.Description}>
        <h2>{t('project-rpg-h2')}</h2>
        <div className={styles.Link}>
          <a
            href="https://fromheartstudio.blogspot.com/2022/07/dear.html?fbclid=IwAR1Sqf3maHb-M9UFJFsJVeti0zGviW7uZzsL52ojFbapch7AQmgwto2l6aw"
            target="_blank"
          >
            Dear
          </a>
          JIRAIYA(WIP)
        </div>
        <p>
          <Trans i18nKey="project-rpg-p1">
            I'm a member at a group that are
            <b>translating Japanese rpg games to Chinese</b>.
          </Trans>
        </p>
        <p>{t('project-rpg-p2')}</p>
        <p>
          <Trans i18nKey="project-rpg-p3">
            Beside of translating, I also participate at using
            <b>3rd-party plugin</b> to insert the translated text into the game!
          </Trans>
        </p>
      </div>
    </div>
  )
}
