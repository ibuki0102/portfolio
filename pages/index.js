import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import welcome from '../public/homepage/welcome.jpg'
import darkWelcome from '../public/homepage/dark-welcome.jpg'
import MainSwiper from '../components/MainSwiper'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import { useContext } from 'react'
import { ThemeContext } from '../pages/_app'

import '../i18n'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  const theme = useContext(ThemeContext).theme
  return (
    <>
      <Head>
        <title>{t('home-title')}</title>
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
          <div className={styles.Welcome}>
            <div className={styles.Description}>
              <h1>{t('home-welcome')}</h1>
              <div className={styles.Goal}>
                <b>{t('home-goal-title')}</b>
                <ul>
                  <li>{t('home-goal-one')}</li>
                  <li>{t('home-goal-two')}</li>
                </ul>
              </div>
            </div>
            <div className={styles.Cover}>
              <Image
                src={theme === 'dark' ? darkWelcome : welcome}
                alt="Welcome Pic"
                priority="true"
                width={1100}
                className={styles.WelcomePic}
              />
            </div>
          </div>
          <h1 className={styles.Text}>{t('home-search')}</h1>
          <MainSwiper />
          <h2 className={styles.Text}>
            <Trans i18nKey="home-project-link">
              For more of my works, check
              <a href="/projects" className={styles.ProjectsLink}>
                Projects
              </a>
              page!
            </Trans>
          </h2>
          <h2 className={styles.Text}>{t('home-interested')}</h2>
          <Footer />
          <BackToTop />
        </div>
      </div>
    </>
  )
}
