import { news } from "../Data/news"
import Link from "next/link"
import { NewsContext } from "../Context/NewsContext"
import { useContext } from "react"
export default function News() {

    const { topicState, setTopicState } = useContext(NewsContext)

    return (
        <div className="bg-gray-100 p-2">
            <Link href="/topic/news" >
                <a  className=" hover:text-blue-700 text-red-600 text-3xl" 
                    onClick={()=>setTopicState("CHỦ ĐỀ / Tin mới")} >
                    Tin mới
                </a>
            </Link>
            <ul className="h-full">
                {news.map((item, index) => {
                    return (
                        <li key={index} className={`flex relative  py-5 md:py-4 mx-4 
                                    ${index !== news.length - 1 ? "border-b border-dashed border-gray-600" : ""}`}>
                            <div className="align-text-top font-serif font-thin 
                        text-4xl text-gray-300 float-left w-16 absolute top-1/5  ">
                                {index + 1}
                            </div>
                            <Link href={`/post/news-id-${index + 1}`} >
                                <a className="hover:text-blue-700 w-5/6 text-sm pl-12 ">
                                    {item.content}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}