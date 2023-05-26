import styles from '../styles/Home.module.scss'

export default function BackToTop() {
  const handleClickBackBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <button className={styles.BackToTop} onClick={() => handleClickBackBtn()}>
      ▲
    </button>
  )
}
