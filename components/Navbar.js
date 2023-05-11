import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import moon from '../public/icons/moon.svg'
import sun from '../public/icons/sun.svg'
import { useContext } from 'react'
import { ThemeContext } from '../pages/_app'
import { LanguageContext } from '../pages/_app'

import '../i18n'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()

  const [menuState, setMenuState] = useState(false)
  const theme = useContext(ThemeContext).theme
  const { language, setLanguage } = useContext(LanguageContext)
  const toggleTheme = useContext(ThemeContext).toggleTheme
  const handleOpenedMenu = () => {
    if (menuState) {
      return setMenuState(false)
    }
    setMenuState(true)
  }
  const handleChangeMode = () => {
    toggleTheme()
  }
  const changeLanguage = (lng) => {
    setLanguage(lng)
    i18n.changeLanguage(lng)
  }
  return (
    <div id={theme === 'dark' && styles.DarkTheme} className={styles.Overlay}>
      <div className={styles.Container}>
        <div className={styles.BtnGroup}>
          <button
            className={menuState ? styles.OpenedMenu : styles.Menu}
            onClick={() => handleOpenedMenu()}
            aria-label="Main Menu"
          >
            <svg width="40" height="40" viewBox="0 0 100 100">
              <path
                className={styles.Line1}
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className={styles.Line2} d="M 20,50 H 80" />
              <path
                className={styles.Line3}
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
          {theme === 'light' ? (
            <Image
              src={moon}
              alt="moon Pic"
              priority="true"
              width={24}
              className={styles.MoonIcon}
              onClick={() => handleChangeMode()}
            />
          ) : (
            <Image
              src={sun}
              alt="sun Pic"
              priority="true"
              width={24}
              className={styles.SunIcon}
              onClick={() => handleChangeMode()}
            />
          )}
        </div>
        <div className={styles.BlogTitle}>{t('header-title')}</div>
        <ul className={menuState ? styles.OpenedNavbar : styles.Navbar}>
          <li>
            <Link href="/">{t('nav-home')}</Link>
          </li>
          <li className={styles.Projects}>
            <Link href="/projects">{t('nav-projects')}</Link>
          </li>

          <li>
            <Link href="/about">{t('nav-about')}</Link>
          </li>
        </ul>
        <div className={styles.LanguageBtn}>
          {language === 'zh_tw' ? (
            <input
              id="toggle-on"
              className={styles.ToggleLeft}
              name="toggle"
              type="radio"
              defaultChecked
            />
          ) : (
            <input
              id="toggle-on"
              className={styles.ToggleLeft}
              name="toggle"
              type="radio"
            />
          )}
          <label
            htmlFor="toggle-on"
            className={styles.Btn}
            onClick={() => changeLanguage('zh_tw')}
          >
            中
          </label>
          {language === 'en' ? (
            <input
              id="toggle-off"
              className={styles.ToggleRight}
              name="toggle"
              type="radio"
              defaultChecked
            />
          ) : (
            <input
              id="toggle-off"
              className={styles.ToggleRight}
              name="toggle"
              type="radio"
            />
          )}
          <label
            htmlFor="toggle-off"
            className={styles.Btn}
            onClick={() => changeLanguage('en')}
          >
            Eng
          </label>
        </div>
      </div>
    </div>
  )
}
{
  /* <div className={styles.ProjectsContainer}>
            <ul className={styles.ProjectsList}>
              <li>
                <Link href="/projects">All</Link>
              </li>
              <li>
                <Link href="/projects">Website</Link>
              </li>
              <li>
                <Link href="/about">Digital Artwork</Link>
              </li>
              <li>
                <Link href="/about">Minecraft</Link>
              </li>
              <li>
                <Link href="/about">Translated Project</Link>
              </li>
            </ul>
          </div> */
}
