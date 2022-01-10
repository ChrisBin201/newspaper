import Link from "next/link"
import Image from "next/image"
import { NewsContext } from "../Context/NewsContext";
import { useContext } from "react";
export default function TopicPost({ content }) {

    const {topicState, setTopicState} = useContext(NewsContext);

    return (
        <div className="mb-4">
            <Link href={`/topic/${content.header.replace("/", "")}`} >
                <a className="hover:text-blue-700 uppercase text-lg font-semibold border-b border-red-600 "
                    onClick={()=>setTopicState(content.header.toUpperCase())}>
                    {content.header}
                </a>
            </Link>
            <ul className="list-square mt-4 flex flex-col sm:flex-row">
                {content.body.map((item, index) => (
                    index === 0 && (
                        <li key={index} className="flex gap-1 flex-row sm:flex-col ">
                            {/* <div> */}
                                <Link href={`/post/${content.header.replace("/", "")}-id-${index}`} >
                                    <a className="flex-none bg-contain bg-no-repeat text-center overflow-hidden w-44 sm:w-auto h-24"
                                        style={{
                                            backgroundImage: `url('${item.img}')`,
                                            // width: "285px"
                                            // backgroundSize:"contain"
                                        }}
                                        title={item.head}
                                    >
                                    </a>
                                </Link>
                            {/* </div> */}
                            <div className=" pl-0 sm:w-44 flex flex-col justify-center md:justify-between leading-normal overflow-hidden">
                                <div className="">
                                    <Link href={`/post/${content.header.replace("/", "")}-id-${index}`} >
                                        <a className=" hover:text-blue-700 text-gray-900 font-bold text-sm mb-2 line-clamp-4 md:line-clamp-3"
                                        >
                                            {item.head}
                                        </a>
                                    </Link>
                                    <div className="hidden md:block" >
                                        <p className=" text-gray-700 text-xs line-clamp-3 ">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                ))}
                <div className="sm:ml-1" >
                    {content.body.map((item, index) => (
                        index > 0 && (
                            <li key={index} className="hover:text-blue-700 py-2 ml-4 text-xs text-gray-600 "
                            >
                                <Link href={`/post/${content.header.replace("/", "")}-id-${index}`} >
                                    <a className="block" >
                                        {item.head}
                                    </a>
                                </Link>
                            </li>
                        )
                    ))}
                </div>
            </ul>
        </div>
    )
}