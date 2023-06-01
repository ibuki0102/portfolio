import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/About.module.scss'
import Image from 'next/image'
import Footer from '../components/Footer'
import pfp from '../public/about/pfp.png'
import BackToTop from '../components/BackToTop'
import { useContext } from 'react'
import { ThemeContext } from '../pages/_app'

import '../i18n'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  const theme = useContext(ThemeContext).theme
  return (
    <>
      <Head>
        <title>{t('nav-about')}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="YvZVkF4zC6dDKQDMT6fScZ4T2E2Ctb05wNtj_gE0c7w"
        />
        <meta
          name="description"
          content="雪央的作品集網站，伊吹之家，ibuki's home。"
        ></meta>
      </Head>
      <div
        id={theme === 'dark' ? styles.DarkTheme : undefined}
        className={styles.Background}
      >
        <Navbar />
        <div className={styles.Main}>
          <div className={styles.Container}>
            <div className={styles.Intro}>
              <Image
                src={pfp}
                alt="pfp Pic"
                priority="true"
                width={300}
                object-fit="fill"
                className={styles.Pfp}
              />
              <h1>{t('about-h1')}</h1>
              <p className={styles.Pronouns}>{t('about-pronouns')}</p>
              <p className={styles.Title}>{t('about-title2')}</p>
              <p>{t('about-subTitle')}</p>
            </div>
            <div className={styles.Introduction}>
              <h3>{t('about-intro-h3')}</h3>
              <p>{t('about-intro-p1')}</p>
              <p>
                <Trans i18nKey="about-intro-p2">
                  I'm currently trying to become an
                  <b>offical Frontend Developer</b>.
                </Trans>
              </p>
              <p>{t('about-intro-p3')}</p>
            </div>
            <div className={styles.Skills}>
              <h2>{t('about-skills')}</h2>
              <div className={styles.ContentContainer}>
                <div className={styles.SkillsContainer}>
                  <h3>{t('about-skills-front')}</h3>
                  <div className={styles.SkillContainer}>
                    <p>HTML</p>
                    <div className={styles.SkillBarBackground}>
                      <div className={styles.Eighty}></div>
                    </div>
                  </div>
                  <div className={styles.SkillContainer}>
                    <p>CSS</p>
                    <div className={styles.SkillBarBackground}>
                      <div className={styles.Sixty}></div>
                    </div>
                  </div>
                  <div className={styles.SkillContainer}>
                    <p>JavaScript</p>
                    <div className={styles.SkillBarBackground}>
                      <div className={styles.Sixty}></div>
                    </div>
                  </div>
                  <div className={styles.SkillContainer}>
                    <p>Bootstrap</p>
                    <div className={styles.SkillBarBackground}>
                      <div className={styles.Sixty}></div>
                    </div>
                  </div>
                  <div className={styles.SkillContainer}>
                    <p>SASS/SCSS</p>
                    <div className={styles.SkillBarBackground}>
                      <div className={styles.Fourty}></div>
                    </div>
                  </div>
                  <div className={styles.SkillContainer}>
                    <p>React</p>
                    <div className={styles.SkillBarBackground}>
                      <div className={styles.Sixty}></div>
                    </div>
                  </div>
                  <div className={styles.SkillContainer}>
                    <p>Next.js</p>
                    <div className={styles.SkillBarBackground}>
                      <div className={styles.Twenty}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.SkillsContainer}>
                  <h3>{t('about-skills-back')}</h3>
                  <div className={styles.SkillContainer}>
                    <p>Node.js</p>
                    <div className={styles.SkillBarBackground}>
                      <div className={styles.Fourty}></div>
                    </div>
                  </div>
                  <div className={styles.SkillContainer}>
                    <p>Express.js</p>
                    <div className={styles.SkillBarBackground}>
                      <div className={styles.Sixty}></div>
                    </div>
                  </div>
                  <div className={styles.SkillContainer}>
                    <p>Mongoose</p>
                    <div className={styles.SkillBarBackground}>
                      <div className={styles.Fourty}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.SkillsContainer}>
                  <h3>{t('about-skills-package')}</h3>
                  <div className={styles.SkillContainer}>
                    <p>Swiper</p>
                    <div className={styles.SkillBarBackground}>
                      <div className={styles.Fourty}></div>
                    </div>
                  </div>
                  <div className={styles.SkillContainer}>
                    <p>SweetAlert2</p>
                    <div className={styles.SkillBarBackground}>
                      <div className={styles.Sixty}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.Certifications}>
              <h2>{t('about-certification')}</h2>
              <div className={styles.Certification}>
                <Trans i18nKey="about-ac">
                  <b>Full Stack Web Development Program</b> - Specialize in
                  Front-end Course
                </Trans>
                <p>Alpha Camp</p>
                <p>April 2023</p>
              </div>
              <p>{t('about-more')}</p>
            </div>
          </div>
          <Footer />
          <BackToTop />
        </div>
      </div>
    </>
  )
}
