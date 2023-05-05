import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Container}>
        <div className={styles.BlogTitle}>Ibuki's Home</div>
        <ul className={styles.Navbar}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.Projects}>
            <Link href="/projects">Projects</Link>
          </li>
          {/* <div className={styles.ProjectsContainer}>
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
          </div> */}
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
