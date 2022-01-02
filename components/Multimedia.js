import Image from "next/image"
import { MultimediaNews } from "../Data/MultimediaNews"
import React from "react"
import Link from "next/link"
export default function Multimedia() {

    return (
        <div className="p-3.5 bg-gray-100 text-sm">
            <div className="flex justify-between py-3">
                <div >
                    <Link href="/topic/multimedia" >
                        <a className="hover:text-blue-700 text-2xl border-b border-red-600 mr-2">
                            Multimedia
                        </a>
                    </Link>
                    <Link href="/topic/anh" >
                        <a className=" hidden md:inline mx-2 hover:text-blue-700" >
                            Ảnh
                        </a>
                    </Link>
                    <Link href="/topic/infographic" >
                        <a className="hidden md:inline mx-2 hover:text-blue-700" >
                            Infographic
                        </a>
                    </Link>
                    <Link href="/topic/video" >
                        <a className="hidden md:inline mx-2 hover:text-blue-700" >
                            Video
                        </a>
                    </Link>
                    <Link href="/topic/emagazine" >
                        <a className="hidden md:inline mx-2 hover:text-blue-700" >
                            Emagazine
                        </a>
                    </Link>
                </div>
                <a className="hidden md:block pt-1" href="https://www.youtube.com/channel/UCdvDDQ9UG1uvwIRsfEwcCMg/featured" >
                    <span className="mx-2 hover:text-blue-700" >Theo dõi báo TG&VN trên</span>
                    <span className="align-middle" >
                        <Image src="/Body/ico-autobike-youtube.png" width={45} height={18} />
                    </span>
                </a>
            </div>
            <div className="flex lg:grid grid-cols-4 gap-7 flex-col lg:flex-row  flex-wrap justify-between">
                {MultimediaNews.map((item, index) => {
                    return (
                        index === 0 ?
                            (
                                <React.Fragment key={index}>
                                    <article className="hidden col-span-2 lg:block relative h-64 bg-cover bg-center group  
                                                overflow-hidden shadow-lg hover:shadow-lg  transition duration-300 
                                                ease-in-out mb-4"
                                        style={{ backgroundImage: `url(${item.img})`, maxWidth: "515px" }}>
                                        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                        <div className="relative w-full h-full flex justify-center items-end ">
                                            <h3 className="p-3" style={{ background: "#0003" }}>
                                                <Link href={`/post/multimedia-id-${index}`} >
                                                    <a className="text-white text-lg font-semibold" >
                                                        <span className="absolute inset-0"></span>
                                                        {item.title}
                                                    </a>
                                                </Link>
                                            </h3>
                                        </div>
                                    </article>
                                    <article className="lg:hidden mb-3" >
                                        <Link href={`/post/multimedia-id-${index}`}  >
                                            <a  className="flex pr-4" >
                                                <div>
                                                    <Image src={item.img} width={264} height={149} />
                                                </div>
                                                <div className="line-clamp-5 ml-3 mt-2 w-3/5 sm:text-lg lg:text-xs font-bold">
                                                    {item.title}
                                                </div>
                                            </a>
                                        </Link>
                                    </article>
                                </React.Fragment>
                            )
                            : (
                                <article key={index} className="mb-3">
                                    <Link href={`/post/multimedia-id-${index}`} >
                                        <a className="flex lg:block pr-4" >
                                            <div>
                                                <Image src={item.img} width={264} height={149} />
                                            </div>
                                            <div className="line-clamp-5 hover:text-blue-700  ml-3 lg:ml-0 mt-2 w-3/5 lg:w-auto  sm:text-lg lg:text-base font-bold">
                                                {item.title}
                                            </div>
                                        </a>
                                    </Link>
                                </article>
                            )
                    )
                })}
            </div>
        </div>
    )
}