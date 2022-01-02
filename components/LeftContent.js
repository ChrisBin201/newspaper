import { contentLeft } from "../Data/content-left"
import Image from "next/image"
import { photoNews } from "../Data/photoNews"
import React from "react"
import ImageNews from "./ImageNews"
import Link from "next/link"
export default function LeftContent() {

    return (
        <div className="col-span-5">
            {
                contentLeft.map((item, index) => {
                    return (
                        index === 5 ?
                            (<React.Fragment key={index} >
                                <div key={index} className=" flex flex-row-reverse lg:block px-2 pt-2 pb-1 lg:pb-4 border-b border-gray-200 lg:border-0 hover:shadow-lg lg:shadow-md mb-1 md:mb-4 ">
                                    <Link href={`/post/content-left-${index}`} >
                                        <a className=" hover:text-blue-700 w-5/6 lg:w-auto text-xs lg:text-sm line-clamp-4 lg:block font-semibold lg:font-bold lg:mb-3 " >
                                            {item.title}
                                        </a>
                                    </Link>
                                    <div className=" md:w-auto bg-white overflow-hidden flex flex-col md:flex-row">
                                        <Link href={`/post/content-left-${index}`} >
                                            <a className="hover:text-blue-700 mr-2">
                                                <Image
                                                    src={item.img}
                                                    width={165}
                                                    height={93}
                                                    alt="photo" />
                                            </a>
                                        </Link>
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
                            (<div key={index} className="flex flex-row-reverse lg:block px-2 pt-2 pb-1 lg:pb-4 border-b border-gray-200 lg:border-0 hover:shadow-lg lg:shadow-md mb-1 md:mb-4 ">
                                <Link href={`/post/content-left-${index}`}  >
                                    <a className="hover:text-blue-700 w-5/6 lg:w-auto text-xs lg:text-sm line-clamp-4 lg:block font-semibold lg:font-bold lg:mb-3 " >
                                        {item.title}
                                    </a>
                                </Link>
                                <div className=" md:w-auto h-full bg-white overflow-hidden flex flex-col md:flex-row">
                                    <Link href={`/post/content-left-${index}`}  >
                                        <a className=" mr-2">
                                            <Image
                                                src={item.img}
                                                width={165}
                                                height={93}
                                                alt="photo" />
                                        </a>
                                    </Link>
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