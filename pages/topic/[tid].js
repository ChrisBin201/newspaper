import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { MultimediaNews } from "../../Data/MultimediaNews";
import Card from "../../components/Card";
import { topic } from "../../Data/TopicData";
import { topicPage } from "../../Data/TopicPageData"
import SliderMobile from "../../components/SliderMobile";
import DatePicker from "react-datepicker";
import React, { useState, useContext } from "react";
import { NewsContext } from "../../Context/NewsContext"
import "react-datepicker/dist/react-datepicker.css";
export default function Topic() {

    const [startDate, setStartDate] = useState(new Date());
    const { topicState, setTopicState } = useContext(NewsContext)
    const [indexC, setIndexC] = useState(0)
    let listContent = [topicPage.slice(0,10), topicPage.slice(9)]
    let contentData = listContent[indexC]
    return (
        <div className={`pb-2 md:pb-7 ${styles.container}`} >
            <Link href="/topic/khoa-học-cong-nghe" >
                <a className='block text-white sm:uppercase mb-4 pl-2 lg:pl-0 pt-1 lg:pt-0 pb-1 lg:uppercase bg-blue-800 lg:bg-inherit font-medium lg:text-blue-700 border-b border-gray-200' >
                    {topicState ? topicState : "Khoa học - Công nghệ"}
                </a>
            </Link>
            <div className='md:grid grid-cols-7 gap-4' >
                <div className='col-span-5 bg-gray-100 md:bg-inherit mb-5 md:mb-0 ' >
                    <SliderMobile content={contentData} length={4} />
                    <div className="hidden md:grid grid-cols-3 gap-2 border-b border-gray-200 " >
                        {contentData.map((item, index) =>
                            index < 4 && (
                                <React.Fragment key={index}>
                                    {index === 0 &&
                                        <>
                                            <li key={index} className="hidden col-span-3 sm:flex flex-row sm:flex-row-reverse bg-gray-100 h-32 sm:h-80">
                                                <Link href={`/post/${item.title.replace("/", "")}-id-${index}`} >
                                                    <a className="flex-none  bg-no-repeat bg-cover text-center overflow-hidden  sm:h-auto w-56 sm:w-[350px] md:w-96 lg:w-[531px]"
                                                        style={{
                                                            backgroundImage: `url('${item.img}')`,
                                                            // width: "538px",
                                                            // height: "303px"
                                                            // backgroundSize:"538px"
                                                        }}
                                                        title={item.title}
                                                    >
                                                    </a>
                                                </Link>
                                                <div className="p-4 flex flex-col md:justify-between leading-normal overflow-hidden">
                                                    <div className="mb-8">
                                                        <Link href={`/post/${item.title.replace("/", "")}-id-${index}`} >
                                                            <a className=" hover:text-blue-700 text-gray-900 font-bold text-sm line-clamp-5 sm:text-xl mb-2 "
                                                            >
                                                                {item.title}
                                                            </a>
                                                        </Link>
                                                        <div className="hidden sm:block" >
                                                            <p className=" text-gray-700 text-sm line-clamp-3 ">
                                                                {item.content}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <Card styleLayout="sm:hidden flex flex-row" title={item.title} img={item.img} imgSize={{ w: 261, h: 147 }} /> */}
                                        </>}
                                    {index !== 0 &&
                                        <Card styleLayout="hidden md:flex flex-row md:flex-col " title={item.title} img={item.img} imgSize={{ w: 261, h: 147 }} />}

                                </React.Fragment>
                            )
                        )}
                    </div>
                    <div className="divide-y divide-gray-200" >
                        {contentData.map((item, index) =>
                        (
                            index >= 4 &&
                            <div key={index} className="pb-2" >
                                <Card
                                    styleLayout="inline-flex flex-row md:flex-row-reverse"
                                    title={item.title}
                                    timer={{ time: item.time, date: item.date }}
                                    content={item.content}
                                    img={item.img}
                                    imgSize={{ w: 230, h: 129 }} />
                            </div>
                        )
                        )}
                    </div>
                    <div className="flex justify-center md:justify-between " >
                        <div className="hidden md:block  w-36 bg-gray-200 rounded-3xl px-4 py-2 " >
                            <div className="pl-7 bg-[length:18px] bg-no-repeat text-sm "
                                style={{ backgroundImage: `url('/topic/ico-date-picker.png')` }} >
                                <DatePicker className="outline-none bg-gray-200 w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div className=" flex gap-3 md:gap-1 py-4  md:py-0 " >
                            <div className={` ${indexC>0 ? "cursor-pointer hover:bg-orange-500 bg-orange-500 md:bg-blue-600 text-white":"bg-gray-200"} w-24 md:w-32  md:rounded-3xl md:px-4 py-1.5 text-center`} 
                            onClick={() => indexC>0 ? setIndexC(indexC-1):setIndexC(indexC)}>
                                Trước
                            </div>
                            <div className={`${indexC<listContent.length-1 ? "cursor-pointer hover:bg-orange-500 bg-orange-500 md:bg-blue-600 text-white":"bg-gray-200" } w-24 md:w-32  md:rounded-3xl md:px-4 py-1.5 text-center `}
                            onClick={() => indexC<listContent.length-1? setIndexC(indexC+1):setIndexC(indexC)} >
                                Sau
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2' >
                    <div className="mb-3" >
                        <Link href={`/topic/tin-moi`} >
                            <a className="hover:text-blue-700 text-2xl border-b border-red-600 "
                                onClick={() => setTopicState("CHỦ ĐỀ / Tin mới")}>
                                Tin mới
                            </a>
                        </Link>
                        <div className='divide-y divide-gray-200 ' >
                            {MultimediaNews.map((item, index) =>
                                <Card key={index}
                                    id={index + 1}
                                    img={item.img}
                                    imgSize={{ w: 110, h: 62 }}
                                    title={item.title}
                                    styleLayout="flex flex-row" />
                            )}
                        </div>
                    </div>
                    <div>
                        <Link href={`/topic/doc-them`} >
                            <a className="hover:text-blue-700 text-2xl border-b border-red-600 "
                                onClick={() => setTopicState("CHỦ ĐỀ")}>
                                Chủ đề
                            </a>
                        </Link>
                        <div className='divide-y divide-gray-200 ' >
                            {topic.map((item, index) =>
                                <Card key={index}
                                    img={item.img}
                                    imgSize={{ w: 110, h: 62 }}
                                    title={item.name}
                                    styleLayout="flex flex-row" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}