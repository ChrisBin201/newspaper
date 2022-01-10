import Image from "next/image"
import { bienDong } from "../Data/BienDong"
import { car } from "../Data/Car"
import { giaiTri } from "../Data/GiaiTri"
import { kinhTe } from "../Data/KinhTe"
import { ngoaiGiao } from "../Data/NgoaiGiao"
import { theGioi } from "../Data/TheGioi"
import { theThao } from "../Data/TheThao"
import { thoiSu } from "../Data/ThoiSu"
import { xaHoi } from "../Data/XaHoi"
import Link from "next/link"
import { NewsContext } from "../Context/NewsContext"
import { useContext } from "react"
export default function CategoryLeft() {

    const { topicState, setTopicState } = useContext(NewsContext)

    function Topic({ content }) {
        return (
            <div className="mb-4">
                <Link href={`/topic/${content.header.replace("/","")}`} >
                    <a className="hover:text-blue-700 text-2xl border-b border-red-600 "
                        onClick={()=>setTopicState(content.header.toUpperCase())}>
                        {content.header}
                    </a>
                </Link>
                <ul className="list-square mt-4 ">
                    {content.body.map((item, index) => (
                        index === 0 ? (
                            <li key={index} className="flex bg-gray-100 h-44">
                                <Link href={`/post/${content.header.replace("/", "")}-id-${index}`} >
                                    <a className="flex-none bg-cover text-center overflow-hidden w-56 md:w-72"
                                        style={{
                                            backgroundImage: `url('${item.img}')`,
                                            // width: "285px"
                                            // backgroundSize:"contain"
                                        }}
                                        title={item.head}
                                    >
                                    </a>
                                </Link>
                                <div className="p-4 flex flex-col md:justify-between leading-normal overflow-hidden">
                                    <div className="mb-8">
                                        <Link href={`/post/${content.header.replace("/", "")}-id-${index}`} >
                                            <a className=" hover:text-blue-700 text-gray-900 font-bold text-sm line-clamp-5 sm:text-base mb-2  md:line-clamp-3"
                                            >
                                                {item.head}
                                            </a>
                                        </Link>
                                        <div className="hidden md:block" >
                                            <p className=" text-gray-700 text-sm line-clamp-3 ">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                            : (
                                <li key={index} className="hover:text-blue-700 py-2 ml-5 text-sm text-gray-600 border-b border-gray-300"
                                >
                                    <Link href={`/post/${content.header.replace("/", "")}-id-${index}`} >
                                        <a className="block" >
                                            {item.head}
                                        </a>
                                    </Link>
                                </li>
                            )
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div className="col-span-3" >
            <Topic content={thoiSu} />
            <Topic content={bienDong} />
            <Topic content={theGioi} />
            <Topic content={ngoaiGiao} />
            <Topic content={kinhTe} />
            <Topic content={theThao} />
            <Topic content={giaiTri} />
            <Topic content={xaHoi} />
            <Topic content={car} />
        </div>
    )
}