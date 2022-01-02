import Image from "next/image"
import { photoNews } from "../Data/photoNews"
import React from "react"
import Link from "next/link"
export default function ImageNews() {

    return (
        <div className="lg:flex flex-wrap justify-between pb-3 mb-3 border-b border-gray-200">
            <div className="font-semibold text-2xl mb-3" >Tin ảnh</div>
            <div className="lg:grid grid-cols-3 gap-2" >
            {photoNews.map((element, i) => {
                return (
                        i === 0 ? (
                        <React.Fragment key={i} >
                            <article className="hidden col-span-3 lg:block relative w-full h-64 bg-cover bg-center group  
                                                overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 
                                                ease-in-out mb-1"
                                style={{ backgroundImage: `url(${element.img})` }}>
                                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-end">
                                    <h3 className="p-2">
                                        <Link href={`/post/image-news-${i}`} >
                                            <a className="text-white text-lg font-semibold">
                                                <span className="absolute inset-0"></span>
                                                {element.title}
                                                <span>
                                                    <Image src="/Body/img-images.png" width={15} height={12} />
                                                </span>
                                            </a>
                                        </Link>
                                    </h3>
                                </div>
                            </article>
                            <article className="flex lg:hidden lg:w-36 mb-1 lg:mb-0 ">
                                <Link href={`/post/image-news-${i}`} >
                                    <a className=" lg:w-auto">
                                        <Image src={element.img} width={146} height={82} />
                                    </a>
                                </Link>
                                <Link href={`/post/image-news-${i}`} >
                                    <a
                                        className=" pl-1 lg:pl-0 line-clamp-3 h-12 lg:h-auto lg:block w-4/5 lg:w-auto text-xs font-bold"
                                    >
                                        {element.title}
                                        <span>
                                            <Image src="/Body/img-images.png" width={15} height={12} />
                                        </span>
                                    </a>
                                </Link>
                            </article>
                        </React.Fragment>
                        )
                        :
                        (<article key={i} className="flex lg:block lg:w-auto mb-1 lg:mb-0 ">
                            <Link href={`/post/image-news-${i}`} >
                                <a className=" lg:w-auto">
                                    <Image src={element.img} width={146} height={82} />
                                </a>
                            </Link>
                            <Link href={`/post/image-news-${i}`} >
                                <a
                                    className=" hover:text-blue-700 pl-1 lg:pl-0 line-clamp-3 h-12 lg:h-auto lg:block w-4/5 lg:w-auto text-xs font-bold"
                                >
                                    {element.title}
                                    <span>
                                        <Image src="/Body/img-images.png" width={15} height={12} />
                                    </span>
                                </a>
                            </Link>
                        </article>)
                )
            })}
            </div>
        </div>
    )
}