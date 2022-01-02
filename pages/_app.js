import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from 'react'
import Layout from '../LayoutComp/layout'
import AppProvider from '../Context/NewsContext'
// import'../styles/Home.module.css'
function MyApp({ Component, pageProps }) {


  return(
  <AppProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppProvider>
  )
}

export default MyApp
