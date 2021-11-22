import { analyzeThoiSu } from "../Data/ThoiSuAnalyzing"
import Image from "next/image"
import { foreignNews } from "../Data/ForeignNews"
import { vanHoa } from "../Data/VanHoa"
import { gocNhinNhanQuyen } from "../Data/GocNhinNhanQuyen"
import { nguoiViet } from "../Data/NguoiViet"
import { hoSo } from "../Data/HoSo"

export default function CategoryCenter() {

    function Topic({ content }) {
        return (
            <div>
                <span className="text-2xl border-b border-red-600 ">{content.header}</span>
                <ul className="bg-gray-100" style={{width: "300px" }} >
                    {content.body.map((item, index) => (
                        index === 0 ? (
                            <li>
                                <div>
                                    <a href={item.url} title={item.head} >
                                        <Image src={item.img} width={300} height={169} />
                                    </a>
                                </div>
                                <div >
                                    <a class="text-gray-900 font-bold text-base mb-2"
                                        href={item.url} >
                                        {item.head}
                                    </a>
                                </div>
                            </li>
                        )
                            : (
                                <li className="text-sm text-gray-600 p-3"  >
                                    <a href={item.url} >
                                        {item.head}
                                    </a>
                                </li>
                            )
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <Topic content={analyzeThoiSu} />
            <Topic content ={foreignNews} />
            <Topic content ={vanHoa} />
            <Topic content ={gocNhinNhanQuyen} />
            <Topic content ={nguoiViet} />
            <Topic content ={hoSo} />
        </div>
    )
}