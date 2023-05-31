import styles from '../styles/Footer.module.scss'
import facebook from '../public/icons/facebook.png'
import plurk from '../public/icons/plurk.png'
import github from '../public/icons/github.png'
import medium from '../public/icons/medium.png'
import linkedin from '../public/icons/linkedin.png'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../pages/_app'

export default function Footer() {
  const theme = useContext(ThemeContext).theme
  return (
    <div
      id={theme === 'dark' ? styles.DarkTheme : undefined}
      className={styles.Footer}
    >
      <div className={styles.IconsContainer}>
        <a href="https://www.plurk.com/bigfrog0102" target="_blank">
          <Image src={plurk} alt="plurk" priority="true" width={32} />
        </a>
        <a href="https://www.facebook.com/bigfrog0102/" target="_blank">
          <Image src={facebook} alt="facebook" priority="true" width={32} />
        </a>
        <a href="https://github.com/ibuki0102" target="_blank">
          <Image src={github} alt="github" priority="true" width={32} />
        </a>
        <a href="https://medium.com/@bigfrog0102" target="_blank">
          <Image src={medium} alt="medium" priority="true" width={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/%E8%8A%8A%E7%91%80-%E9%BB%83-36694123b/"
          target="_blank"
        >
          <Image src={linkedin} alt="linkedin" priority="true" width={32} />
        </a>
      </div>
      <div className={styles.Copyright}>2023 &copy; - Developed by Ibuki.</div>
    </div>
  )
}
