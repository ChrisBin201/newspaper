import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NavMobile from "../components/NavMobile"
import Head from 'next/head'
export default function Layout({ children }) {
    const [activeNavMobile, setActiveNavMobile] = useState(false)
    const [_document, set_document] = useState(null)

    useEffect(() => {
        set_document(document)
        console.log(document)
    }, [])

    if (_document) {
        let body = _document.body;
        if (activeNavMobile)
            body.style.overflow = "hidden"
        else
            body.style.overflow = "auto"
    }
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header setActiveNavMobile={setActiveNavMobile} />
            <main>{children}</main>
            <Footer />
            <NavMobile active={activeNavMobile} setActiveNavMobile={setActiveNavMobile} />
        </>
    )
}