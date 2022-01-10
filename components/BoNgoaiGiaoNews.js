import { boNgoaiGiaoNews } from "../Data/boNgoaiGiaoNews"
import Image from "next/image"
import Link from "next/link"
import { NewsContext } from "../Context/NewsContext"
import { useContext } from "react"
export default function BoNgoaiGiaoNews() {

    const { topicState, setTopicState } = useContext(NewsContext)

    return (
        <div
            // style={{width:"300px"}} 
            className="mt-3">
            <Link href="/topic/tin-bo-ngoai-giao" >
                <a  className="hover:text-blue-700 text-2xl border-b border-red-600 " 
                    onClick={()=>setTopicState("NGOẠI GIAO / Tin Bộ Ngoại giao ")} >
                    Tin Bộ Ngoại giao
                </a>
            </Link>
            <div className="mt-3 bg-gray-100 pb-2 " >
                {boNgoaiGiaoNews.map((item, index) => {
                    return (
                        index === 0 ?
                            (<div key={index} className=" flex md:block pb-3 md:pb-0" >
                                <Link href={`/post/tin-bo-ngoai-giao-id-${index}`} >
                                    <a >
                                        <Image src={item.img} width={320} height={169} />
                                    </a>
                                </Link>
                                <Link href={`/post/tin-bo-ngoai-giao-id-${index}`} >
                                    <a className="hover:text-blue-700 block text-gray-900 font-bold text-sm mb-2 mx-3 pt-2 md:pt-0" >
                                        {item.title}
                                    </a>
                                </Link>
                            </div>)

                            :
                            (
                                <Link key={index} href={`/post/tin-bo-ngoai-giao-id-${index}`} >
                                    <a className="block hover:text-blue-700 text-sm pb-2 mb-2 mx-3 border-b border-dashed border-gray-300" >
                                        {item.title}
                                    </a>
                                </Link>
                            )
                    )
                })}
            </div>
        </div>
    )
}