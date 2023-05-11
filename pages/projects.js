import styles from '../styles/Projects.module.scss'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
      </Head>
      <Navbar />
      <div
        id={theme === 'dark' && styles.DarkTheme}
        className={styles.Background}
      >
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
        </div>
      </div>
    </>
  )
}
