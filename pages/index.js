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
import Link from 'next/link'
export default function Home() {
  
  return (
    <React.Fragment>
        <div className="md:hidden whitespace-nowrap">
                <div className="flex w-full text-center py-1 items-center bg-blue-800 text-white mb-4">
                    <Link href="/topic/chu-de"  >
                        <a className="px-2 font-bold"
                        // style={{ backgroundImage: "url(/Body/ico-topic.png)" }}
                        >
                            CHỦ ĐỀ
                        </a>
                    </Link>
                    <div className="flex w-full overflow-x-scroll">
                        <Link href="/topic/khung-hoang-nang-luong" >
                            <a className="px-2 text-sm font-bold "
                            >
                                Khủng hoảng năng lượng
                            </a>
                        </Link>
                        <Link href="/topic/bien-dong" >
                            <a className="px-2 text-sm font-bold "
                                href="https://baoquocte.vn/chu-de/bien-dong.topic" >
                                Biển Đông
                            </a>
                        </Link>
                        <Link href="/topic/cang-thang-nga-ukraine"  >
                            <a className="px-2 text-sm font-bold "
                                href="https://baoquocte.vn/chu-de/cang-thang-nga-ukraine.topic" >
                                Căng thẳng Nga-Ukraine
                            </a>
                        </Link>
                        <Link href="/topic/ngoai-giao-vaccine" >
                            <a className="px-2 text-sm font-bold "
                                href="https://baoquocte.vn/chu-de/ngoai-giao-vaccine.topic" >
                                Ngoại giao vaccine
                            </a>
                        </Link>
                        <Link href="/topic/chao-lua-trung-dong" >
                            <a className="px-2 text-sm font-bold " href="" >
                                Chảo lửa Trung Đông
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        <Body />
    </React.Fragment>
  )
}
