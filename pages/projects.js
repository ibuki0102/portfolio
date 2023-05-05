import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/swiper.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from '../styles/Projects.module.scss'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

import tetris from '../public/homepage/tetris.png'
import twitter from '../public/projects/website/twitter.png'
import portfolio from '../public/projects/website/portfolio.png'

import art_1 from '../public/projects/draws/art1.png'
import art_2 from '../public/projects/draws/art2.png'
import art_3 from '../public/projects/draws/art3.png'
import art_4 from '../public/projects/draws/art4.png'
import art_5 from '../public/projects/draws/art5.png'

import ua1 from '../public/projects/minecraft/ua1.png'
import ua1_5 from '../public/homepage/ua1_5.png'
import parkour from '../public/projects/minecraft/parkour.png'

import dear from '../public/homepage/dear.jpg'
import jiraiya from '../public/projects/translated_game/jiraiya.png'

export default function Projects() {
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
            <h1>Projects</h1>
            <div className={styles.Description}>
              <hr />
              <p>Some projects are done by myself, some aren't.</p>
              <p>But I do participate every projects listed here!</p>
            </div>
            <div className={styles.ProjectsList}>
              <div className={styles.ProjectContainer}>
                <div className={styles.SwiperContainer}>
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    direction={'vertical'}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    slidesPerView={1}
                    className={styles.Swiper}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide className={styles.ImgContainer}>
                      <Image
                        src={tetris}
                        alt="tetris Pic"
                        priority="true"
                        width={350}
                        height={300}
                      />
                    </SwiperSlide>
                    <SwiperSlide className={styles.ImgContainer}>
                      <Image
                        src={twitter}
                        alt="twitter Pic"
                        priority="true"
                        width={500}
                        height={300}
                      />
                    </SwiperSlide>
                    <SwiperSlide className={styles.ImgContainer}>
                      <Image
                        src={portfolio}
                        alt="portfolio Pic"
                        priority="true"
                        width={450}
                        height={300}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className={styles.Description}>
                  <h2>Website</h2>
                  <div className={styles.Link}>
                    <a
                      href="https://codepen.io/bigfrog0102/pens/public"
                      target="_blank"
                    >
                      Codepen
                    </a>
                    <a href="https://github.com/ibuki0102" target="_blank">
                      Github
                    </a>
                  </div>
                  <p>
                    <b>Tetris Game</b>: A simple game made by using
                    html/css/javascript, it's a sideproject that I used to
                    review the basics.
                  </p>
                  <p>
                    <b>Simple Twitter</b>: A cooperation project which was my
                    graduation project at Alpha Camp, it just like a simple
                    version of real Twitter.
                  </p>
                  <p>
                    <b>Portfolio Website</b>: A website to display the projects
                    that I have participated, which not only includes website
                    project.
                  </p>
                </div>
              </div>

              <div className={styles.ProjectOppositeContainer}>
                <div className={styles.SwiperContainer}>
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    direction={'vertical'}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    slidesPerView={1}
                    className={styles.Swiper}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide className={styles.ImgContainer}>
                      <Image
                        src={art_2}
                        alt="art_2 Pic"
                        priority="true"
                        width={350}
                        height={300}
                      />
                    </SwiperSlide>
                    <SwiperSlide className={styles.ImgContainer}>
                      <Image
                        src={art_1}
                        alt="art_1 Pic"
                        priority="true"
                        width={350}
                        height={300}
                      />
                    </SwiperSlide>
                    <SwiperSlide className={styles.ImgContainer}>
                      <Image
                        src={art_3}
                        alt="art_3 Pic"
                        priority="true"
                        width={350}
                        height={300}
                      />
                    </SwiperSlide>
                    <SwiperSlide className={styles.ImgContainer}>
                      <Image
                        src={art_4}
                        alt="art_4 Pic"
                        priority="true"
                        width={300}
                        height={300}
                      />
                    </SwiperSlide>
                    <SwiperSlide className={styles.ImgContainer}>
                      <Image
                        src={art_5}
                        alt="art_5 Pic"
                        priority="true"
                        width={300}
                        height={300}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className={styles.Description}>
                  <h2>Digital Artworks</h2>
                  <div className={styles.Link}>
                    <a
                      href="https://www.pixiv.net/users/12573474/artworks"
                      target="_blank"
                    >
                      Pixiv
                    </a>
                  </div>
                  <p>
                    The digital artworks that drawn by myself. I'm currently
                    using <b>Clip Studio Paint</b> to draw.
                  </p>
                  <p>
                    I started learning digital art at a young age, but I didn't
                    take any long-term course to learn it.
                  </p>
                  <p>
                    Even if I don't have much artworks, but there'll be more in
                    future!
                  </p>
                </div>
              </div>

              <div className={styles.ProjectContainer}>
                <div className={styles.SwiperContainer}>
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    direction={'vertical'}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    slidesPerView={1}
                    className={styles.Swiper}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide className={styles.ImgContainer}>
                      <Image
                        src={ua1_5}
                        alt="ua1_5 Pic"
                        priority="true"
                        width={500}
                        height={300}
                      />
                    </SwiperSlide>
                    <SwiperSlide className={styles.ImgContainer}>
                      <Image
                        src={ua1}
                        alt="ua1 Pic"
                        priority="true"
                        width={500}
                        height={300}
                      />
                    </SwiperSlide>
                    <SwiperSlide className={styles.ImgContainer}>
                      <Image
                        src={parkour}
                        alt="parkour Pic"
                        priority="true"
                        width={500}
                        height={300}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className={styles.Description}>
                  <h2>Minecraft</h2>
                  <div className={styles.Link}>
                    <a
                      href="https://forum.gamer.com.tw/C.php?bsn=18673&snA=190709&tnum=1"
                      target="_blank"
                    >
                      Map1-UA1
                    </a>
                    <a
                      href="https://ctmrepository.com/index.php?action=viewMap&id=453"
                      target="_blank"
                    >
                      Map2-UA1.5
                    </a>
                    <a
                      href="https://forum.gamer.com.tw/C.php?bsn=18673&snA=196538&tnum=1&subbsn=15"
                      target="_blank"
                    >
                      Map3-黑白跑酷
                    </a>
                  </div>
                  <p>
                    <b>Minecraft</b> is a well-known Sandbox game, and instead
                    of playing auto-generated world, I made some custom map that
                    using some tools and command!
                  </p>
                  <p>
                    There're many kind of custom maps, survival, parkour and
                    puzzle. Some of them even need to pay for play.
                  </p>
                  <p>
                    Usually I will use some <b>3rd-party plugins</b> to help me
                    making the buildings and terrain!
                  </p>
                </div>
              </div>

              <div className={styles.ProjectOppositeContainer}>
                <div className={styles.SwiperContainer}>
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    direction={'vertical'}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    slidesPerView={1}
                    className={styles.Swiper}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide className={styles.ImgContainer}>
                      <Image
                        src={dear}
                        alt="dear Pic"
                        priority="true"
                        width={400}
                        height={300}
                      />
                    </SwiperSlide>
                    <SwiperSlide className={styles.ImgContainer}>
                      <Image
                        src={jiraiya}
                        alt="jiraiya Pic"
                        priority="true"
                        width={500}
                        height={300}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className={styles.Description}>
                  <h2>Translated Project</h2>
                  <div className={styles.Link}>
                    <a
                      href="https://fromheartstudio.blogspot.com/2022/07/dear.html?fbclid=IwAR1Sqf3maHb-M9UFJFsJVeti0zGviW7uZzsL52ojFbapch7AQmgwto2l6aw"
                      target="_blank"
                    >
                      Dear
                    </a>
                    JIRAIYA(WIP)
                  </div>
                  <p>
                    I'm a member at a group that are{' '}
                    <b>translating Japanese rpg games to Chinese</b>.
                  </p>
                  <p>
                    Although I have decent interest in Japanese and it's my
                    major in university, being afraid of losing my interest in
                    Japanese made me chose not to become a translating worker.
                  </p>
                  <p>
                    Beside of translating, I also participate at using{' '}
                    <b>3rd-party plugin</b> to insert the translated text into
                    the game!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
