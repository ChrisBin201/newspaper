import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavMobile from '../components/NavMobile'
import styles from '../styles/Home.module.css'
import "swiper/css/bundle";
// import "./styles.css";
export default function Home() {
  const [activeNavMobile,setActiveNavMobile] = useState(false)
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={activeNavMobile? "fixed left-0 right-0":""}>
        <NavMobile active={activeNavMobile} setActiveNavMobile={setActiveNavMobile} />
        <Header setActiveNavMobile={setActiveNavMobile} />
        <Body />
        <Footer />
      </div>
 </React.Fragment> 
  )
}
