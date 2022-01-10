import { ImageList } from "@mui/material"
import image from "next/image"
import Image from "next/image"
import Link from "next/link"
export default function Card({ id, img, imgSize, title, content, styleLayout, timer }) {
    let widthContent, widthImage;
    if (styleLayout.includes("flex-col")) {
        widthImage = "w-4/12 sm:w-auto"
        widthContent = "w-8/12 sm:w-full";
    }
    else {
        widthContent = "w-8/12";
        widthImage = "w-4/12";
    }
    console.log(styleLayout)
    return (
        <li className={`${styleLayout} w-full gap-2 py-2`}>
            <Link href={`/post/${title.replace("/", "")}`} >
                <a className={`relative py-2 pb-0 block ${widthImage}`}
                >
                    <Image src={img} width={imgSize.w} height={imgSize.h} layout="responsive" />
                    {id && <span className="absolute top-2 left-0 text-sm leading-tight text-white pb-0.5 px-3 bg-red-600" >{id}</span>}
                </a>
            </Link>
            <span className={`${widthContent} pr-2.5`}>
                <div className="pt-2 flex flex-col  md:justify-between overflow-hidden">
                    <div className="">
                        <Link href={`/post/${title.replace("/", "")}`} >
                            <a className=" hover:text-blue-700 text-gray-900 font-bold text-xs sm:text-base md:text-sm mb-2 line-clamp-4 md:line-clamp-3"
                            >
                                {title}
                            </a>
                        </Link>
                        {timer &&
                            <span className="text-xs text-gray-400 flex  gap-1" >
                                <span className="mt-[1px]" >
                                    <Image src="/Header/ico-clock.png" width={15} height={15} ></Image>
                                </span>
                                <span>{timer.time}</span>
                                <span className="leading-tight" >|</span>
                                <span>{timer.date}</span>
                            </span>
                        }
                        <div className="hidden md:block" >
                            <p className=" text-gray-700 text-sm line-clamp-3 ">
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            </span>
        </li>
    )
}