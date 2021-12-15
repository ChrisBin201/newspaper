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
  const [activeNavMobile, setActiveNavMobile] = useState(false)
  const [_document, set_document] = React.useState(null)

  React.useEffect(() => {
    set_document(document)
    console.log(document)
  }, [])
  if(_document){ 
    let body = _document.body;
    if(activeNavMobile)
      body.style.overflow="hidden"
    else
      body.style.overflow="auto"
  }
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={` ${activeNavMobile ? "overflow-hidden" : ""}`}>
        {/* overlays for mobile nav */}
        {/* <div className={`lg:hidden fixed inset-0 h-screen w-screen hidden opacity-70 bg-black z-40 menu_overlay `} >
        </div> */}
        <Header setActiveNavMobile={setActiveNavMobile} />
        <Body />
        <Footer />
        <NavMobile active={activeNavMobile} setActiveNavMobile={setActiveNavMobile} />

      </div>
    </React.Fragment>
  )
}
