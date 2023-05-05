import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/About.module.scss'
import Image from 'next/image'
import Footer from '../components/Footer'
import pfp from '../public/about/pfp.png'

export default function About() {
  return (
    <>
      <Head>
        <title>Ibuki's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.Background}>
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
              <h1>Hi! I'm Ibuki.</h1>
              <p className={styles.Pronouns}>
                You could also call me: 雪央, bigfrog.
              </p>
              <p className={styles.Title}>
                Noob Junior Frontend Developer | Taiwan/Taichung
              </p>
              <p>
                Amateur Translator, Digital artwork maker, Minecraft map maker
              </p>
            </div>
            <div className={styles.Introduction}>
              <h3>Self Introduction</h3>
              <p>
                A normal person who always have passion at create something and
                find something special.
              </p>
              <p>
                I'm currently trying to become an{' '}
                <b>offical Frontend Developer</b>.
              </p>
              <p>
                Also, I'm helping translate Japanese rpg game to Chinese,
                learning how to draw better Digital artwork and making Custom
                Minecraft map.
              </p>
            </div>
            <div className={styles.Skills}>
              <h2>Skill Stacks</h2>
              <div className={styles.ContentContainer}>
                <div className={styles.SkillsContainer}>
                  <h3>Front-End</h3>
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
                  <h3>Back-End</h3>
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
                    <p>MongoDB/Mongoose</p>
                    <div className={styles.SkillBarBackground}>
                      <div className={styles.Fourty}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.SkillsContainer}>
                  <h3>JS package</h3>
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
              <h2>Certifications</h2>
              <div className={styles.Certification}>
                <b>Full Stack Web Development Program</b> - Specialize in
                Front-end Course
                <p>Alpha Camp</p>
                <p>April 2023</p>
              </div>
              <p>To be more...</p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
