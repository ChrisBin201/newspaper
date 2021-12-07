import Image from "next/image"
import { MultimediaNews } from "../Data/MultimediaNews"
import React from "react"
export default function Multimedia() {

    return (
        <div className="p-3.5 bg-gray-100 text-sm">
            <div className="flex justify-between py-3">
                <div >
                    <span className="text-2xl border-b border-red-600 mr-2">Multimedia</span>
                    <a className=" hidden md:inline mx-2 hover:text-blue-700" href="https://baoquocte.vn/tin-anh">Ảnh</a>
                    <a className="hidden md:inline mx-2 hover:text-blue-700" href="https://baoquocte.vn/infographic">Infographic</a>
                    <a className="hidden md:inline mx-2 hover:text-blue-700" href="https://baoquocte.vn/tin-video">Video</a>
                    <a className="hidden md:inline mx-2 hover:text-blue-700" href="https://baoquocte.vn/emagazine">Emagazine</a>
                </div>
                <a className="hidden md:block pt-1" href="https://www.youtube.com/channel/UCdvDDQ9UG1uvwIRsfEwcCMg/featured" >
                    <span className="mx-2 hover:text-blue-700" >Theo dõi báo TG&VN trên</span>
                    <span>
                        <Image src="/Body/ico-autobike-youtube.png" width={45} height={18} />
                    </span>
                </a>
            </div>
            <div className="flex flex-col lg:flex-row  flex-wrap justify-between">
                {MultimediaNews.map((item, index) => {
                    return (
                        index === 0 ?
                            (
                                <>
                                    <article key={index} className="hidden lg:block relative w-full h-64 bg-cover bg-center group  
                                                overflow-hidden shadow-lg hover:shadow-lg  transition duration-300 
                                                ease-in-out mb-4 "
                                        style={{ backgroundImage: `url(${item.img})`, width: "540px" }}>
                                        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                        <div className="relative w-full h-full flex justify-center items-end ">
                                            <h3 className="p-3" style={{ background: "#0003" }}>
                                                <a className="text-white text-lg font-semibold" href="#">
                                                    <span className="absolute inset-0"></span>
                                                    {item.title}
                                                </a>
                                            </h3>
                                        </div>
                                    </article>
                                    <article key={index} className="lg:hidden mb-3" >
                                        <a href="" className="flex pr-4" >
                                            <div>
                                                <Image src={item.img} width={264} height={149} />
                                            </div>
                                            <div className=" ml-3 mt-2 w-3/5 text-xs font-bold">
                                                {item.title}
                                            </div>
                                        </a>
                                    </article>
                                </>
                            )
                            : (
                                <article key={index} className="lg:w-64 mb-3">
                                    <a href="" className="flex lg:block pr-4" >
                                        <div>
                                            <Image src={item.img} width={264} height={149} />
                                        </div>
                                        <div className="  ml-3 mt-2 w-3/5 text-xs font-bold">
                                            {item.title}
                                        </div>
                                    </a>
                                </article>
                            )
                    )
                })}
            </div>
        </div>
    )
}