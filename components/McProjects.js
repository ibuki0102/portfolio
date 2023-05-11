import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/swiper.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Image from 'next/image'
import styles from '../styles/Projects.module.scss'

import ua1 from '../public/projects/minecraft/ua1.png'
import ua1_5 from '../public/homepage/ua1_5.png'
import parkour from '../public/projects/minecraft/parkour.png'

import '../i18n'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

export default function McProjects() {
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
              src={ua1_5}
              alt="ua1_5 Pic"
              priority="true"
              width={500}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.ImgContainer}>
            <Image
              src={ua1}
              alt="ua1 Pic"
              priority="true"
              width={500}
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.ImgContainer}>
            <Image
              src={parkour}
              alt="parkour Pic"
              priority="true"
              width={500}
              height={300}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.Description}>
        <h2>{t('project-mc-h2')}</h2>
        <div className={styles.Link}>
          <a
            href="https://forum.gamer.com.tw/C.php?bsn=18673&snA=190709&tnum=1"
            target="_blank"
          >
            UA1
          </a>
          <a
            href="https://ctmrepository.com/index.php?action=viewMap&id=453"
            target="_blank"
          >
            UA1.5
          </a>
          <a
            href="https://forum.gamer.com.tw/C.php?bsn=18673&snA=196538&tnum=1&subbsn=15"
            target="_blank"
          >
            黑白跑酷
          </a>
        </div>
        <p>
          <Trans i18nKey="project-mc-p1">
            <b>Minecraft</b> is a well-known Sandbox game, and instead of
            playing auto-generated world, I made some custom map that using some
            tools and command!
          </Trans>
        </p>
        <p>{t('project-mc-p2')}</p>
        <p>
          <Trans i18nKey="project-mc-p3">
            Usually I will use some <b>3rd-party plugins</b> to help me making
            the buildings and terrain!
          </Trans>
        </p>
      </div>
    </div>
  )
}
