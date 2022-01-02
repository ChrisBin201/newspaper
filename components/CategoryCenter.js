import { analyzeThoiSu } from "../Data/ThoiSuAnalyzing"
import Image from "next/image"
import { foreignNews } from "../Data/ForeignNews"
import { vanHoa } from "../Data/VanHoa"
import { gocNhinNhanQuyen } from "../Data/GocNhinNhanQuyen"
import { nguoiViet } from "../Data/NguoiViet"
import { hoSo } from "../Data/HoSo"
import Link from "next/link"
// import Topic from "./Topic"
export default function CategoryCenter() {

    function Topic({ content }) {
        return (
            <div className="mb-4" >
                <Link href={`/topic/${content.header.replace("/","")}`} >
                    <a className="hover:text-blue-700 text-2xl border-b border-red-600 ">
                        {content.header}
                        </a>
                </Link>
                <ul className="bg-gray-100 mt-4 "  >
                    {content.body.map((item, index) => (
                        index === 0 ? (
                            <li key={index} className="flex lg:block" >
                                <div>
                                    <Link href={`/post/${content.header.replace("/","")}-id-${index}`} >
                                        <a  title={item.head} >
                                            <Image src={item.img} width={310} height={169} />
                                        </a>
                                    </Link>
                                </div>
                                <div className="hover:text-blue-700 pl-3 " >
                                    <Link href={`/post/${content.header.replace("/","")}-id-${index}`} >
                                        <a className="hover:text-blue-700 w-11/12 lg:w-auto mt-2 lg:mt-0 text-gray-900 font-bold text-sm md:text-base mb-2 line-clamp-3 lg:block"
                                             >
                                            {item.head}
                                        </a>
                                    </Link>
                                </div>
                            </li>
                        )
                            : (
                                <li key={index} className="hover:text-blue-700 text-sm text-gray-600 p-3"  >
                                    <Link href={`/post/${content.header.replace("/","")}-id-${index}`} >
                                        <a  >
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
        <div className="col-span-2" >
            <Topic content={analyzeThoiSu} />
            <Topic content ={foreignNews} />
            <Topic content ={vanHoa} />
            <Topic content ={gocNhinNhanQuyen} />
            <Topic content ={nguoiViet} />
            <Topic content ={hoSo} />
        </div>
    )
}