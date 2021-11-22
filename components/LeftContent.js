import { contentLeft } from "../Data/content-left"
import Image from "next/image"
import { photoNews } from "../Data/photoNews"
import React from "react"
export default function LeftContent() {

    return (
        <div>
            {
                contentLeft.map((item, index) => {
                    return (
                        index === 5 ?
                            (<React.Fragment>
                                <div className="pb-4 shadow-lg mb-4 ">
                                    <div className="text-sm font-bold mb-3 " >{item.title}</div>
                                    <div class="w-full bg-white overflow-hidden flex flex-col md:flex-row">
                                        <div className="mr-2">
                                            <Image
                                                src={item.img}
                                                width={165}
                                                height={93}
                                                alt="photo" />
                                        </div>
                                        <div className="w-full md:w-3/5 text-left md:p-0.5 ">
                                            <p className="text-xs leading-relaxed text-gray-500 font-normal">
                                                {item.body}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-between pb-3 mb-3 border-b border-gray-200">
                                    {photoNews.map((element, i) => {
                                        return (
                                            // <div >
                                            i === 0 ? (
                                                <article className="relative w-full h-64 bg-cover bg-center group  
                                                overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 
                                                ease-in-out mb-4"
                                                    style={{ backgroundImage: `url(${element.img})` }}>
                                                    <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                                    <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-end">
                                                        <h3 class="p-2">
                                                            <a class="text-white text-lg font-semibold" href="#">
                                                                <span class="absolute inset-0"></span>
                                                                {element.title}
                                                                <span>
                                                                    <Image src="/Body/img-images.png" width={15} height={12} />
                                                                </span>
                                                            </a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            )
                                                :
                                                (<article style={{ width: "146px" }}>
                                                    <div>
                                                        <Image src={element.img} width={146} height={82} />
                                                    </div>
                                                    <div className="text-xs font-bold">
                                                        {element.title}
                                                        <span>
                                                            <Image src="/Body/img-images.png" width={15} height={12} />
                                                        </span>
                                                    </div>

                                                </article>)

                                            // </div>
                                        )
                                    })}
                                </div>
                            </React.Fragment>
                            )
                            :
                            (<div className="pb-4 shadow-lg mb-4 ">
                                <div className="text-sm font-bold mb-3 " >{item.title}</div>
                                <div class="w-full bg-white overflow-hidden flex flex-col md:flex-row">
                                    <div className="mr-2">
                                        <Image
                                            src={item.img}
                                            width={165}
                                            height={93}
                                            alt="photo" />
                                    </div>
                                    <div className="w-full md:w-3/5 text-left md:p-0.5 ">
                                        <p className="text-xs leading-relaxed text-gray-500 font-normal">
                                            {item.body}
                                        </p>
                                    </div>
                                </div>
                            </div>)
                    )
                })
            }
        </div>
    )
}