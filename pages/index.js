import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavMobile from '../components/NavMobile'
import styles from '../styles/Home.module.css'
import "swiper/css/bundle";
// import "./styles.css";
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavMobile />
      {/* overlays for mobile nav */}
      <div className={`lg:hidden fixed inset-0 hidden opacity-70 bg-black z-40 ${styles.menu_overlay}`} ></div>
      <Header />
      <Body />
      <Footer />
 </React.Fragment> 
  )
}
