import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import welcome from '../public/homepage/welcome.png'
import MainSwiper from '../components/MainSwiper'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ibuki's Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.Background}>
        <div className={styles.Main}>
          <div className={styles.Welcome}>
            <h1>歡迎來到我的作品集！</h1>
            <h1>Welcome to my portfolio!</h1>
            <h1>ようこそ！私のポートフォリオ！</h1>
            <div className={styles.Cover}>
              <Image
                src={welcome}
                alt="Welcome Pic"
                priority="true"
                width={700}
              />
            </div>
          </div>
          <h1 className={styles.Text}>Are you searching for something?</h1>
          <MainSwiper />
          <h2 className={styles.Text}>
            For more of my works, check
            <a href="/projects" className={styles.ProjectsLink}>
              Projects
            </a>
            page!
          </h2>
          <h2 className={styles.Text}>
            If you are interested, contact me via the link below. :D
          </h2>
          <Footer />
        </div>
      </div>
    </>
  )
}
