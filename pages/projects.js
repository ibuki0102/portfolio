import styles from '../styles/Projects.module.scss'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

import WebProjects from '../components/WebProjects'
import ArtProjects from '../components/ArtProjects'
import McProjects from '../components/McProjects'
import RpgProjects from '../components/RpgProjects'

import { useContext } from 'react'
import { ThemeContext } from '../pages/_app'

import '../i18n'
import { useTranslation } from 'react-i18next'

export default function Projects() {
  const { t } = useTranslation()
  const theme = useContext(ThemeContext).theme
  return (
    <>
      <Head>
        <title>{t('project-title')}</title>
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
            <h1>{t('project-h1')}</h1>
            <div className={styles.Description}>
              <hr />
              <p>{t('project-p1')}</p>
              <p>{t('project-p2')}</p>
            </div>
            <div className={styles.ProjectsList}>
              <WebProjects />
              <ArtProjects />
              <McProjects />
              <RpgProjects />
            </div>
          </div>
          <Footer />
          <BackToTop />
        </div>
      </div>
    </>
  )
}
