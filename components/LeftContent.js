import { contentLeft } from "../Data/content-left"
import Image from "next/image"
import { photoNews } from "../Data/photoNews"
import React from "react"
import ImageNews from "./ImageNews"
export default function LeftContent() {

    return (
        <div className="col-span-5">
            {
                contentLeft.map((item, index) => {
                    return (
                        index === 5 ?
                            (<React.Fragment key={index} >
                                <div key={index} className=" flex flex-row-reverse items-center lg:block px-2 pt-2 pb-0 lg:pb-4 shadow-lg mb-4 ">
                                    <a href="" className=" hover:text-blue-700 w-5/6 lg:w-auto text-xs lg:text-sm line-clamp-4 lg:block font-semibold lg:font-bold lg:mb-3 " >
                                        {item.title}
                                    </a>
                                    <div className=" md:w-auto bg-white overflow-hidden flex flex-col md:flex-row">
                                        <a href="" className="hover:text-blue-700 mr-2">
                                            <Image
                                                src={item.img}
                                                width={165}
                                                height={93}
                                                alt="photo" />
                                        </a>
                                        <div className="hidden lg:block  w-full md:w-3/5 text-left md:p-0.5 lg:p-1">
                                            <p className="text-xs leading-relaxed text-gray-500 font-normal">
                                                {item.body}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <ImageNews />
                            </React.Fragment>
                            )
                            :
                            (<div key={index} className="flex flex-row-reverse items-center lg:block px-2 pt-2 pb-0 lg:pb-4 shadow-lg mb-4 ">
                                <a href="" className="hover:text-blue-700 w-5/6 lg:w-auto text-xs lg:text-sm line-clamp-4 lg:block font-semibold lg:font-bold lg:mb-3 " >
                                    {item.title}
                                </a>
                                <div className=" md:w-auto h-full bg-white overflow-hidden flex flex-col md:flex-row">
                                    <a href="" className=" mr-2">
                                        <Image
                                            src={item.img}
                                            width={165}
                                            height={93}
                                            alt="photo" />
                                    </a>
                                    <div className="hidden lg:block w-full md:w-3/5 text-left md:p-0.5 lg:p-1">
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