import { contentLeft } from "../Data/content-left"
import Image from "next/image"
import { photoNews } from "../Data/photoNews"
import React from "react"
import ImageNews from "./ImageNews"
export default function LeftContent() {

    return (
        <div >
            {
                contentLeft.map((item, index) => {
                    return (
                        index === 5 ?
                            (<React.Fragment key={index} >
                                <div key={index} className="pb-4 shadow-lg mb-4 ">
                                    <div className="text-sm font-bold mb-3 " >{item.title}</div>
                                    <div className="w-full bg-white overflow-hidden flex flex-col md:flex-row">
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
                                <ImageNews/>
                            </React.Fragment>
                            )
                            :
                            (<div key={index} className="pb-4 shadow-lg mb-4 ">
                                <div className="text-sm font-bold mb-3 " >{item.title}</div>
                                <div className="w-full bg-white overflow-hidden flex flex-col md:flex-row">
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