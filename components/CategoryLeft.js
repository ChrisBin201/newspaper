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

export default function CategoryLeft() {

    function Topic({ content }) {
        return (
            <div className="mb-4">
                <span className="text-2xl border-b border-red-600 ">{content.header}</span>
                <ul className="list-square mt-4 ">
                    {content.body.map((item, index) => (
                        index === 0 ? (
                            <li key={index} style={{ height: "160px" }} className="flex bg-gray-100">
                                <a className="flex-none bg-cover text-center overflow-hidden"
                                    style={{
                                        backgroundImage: `url('${item.img}')`,
                                        width: "285px", height: "160px"
                                    }}
                                    href={item.url}
                                    title={item.head}
                                >
                                </a>
                                <div className="p-4 flex flex-col justify-between leading-normal overflow-hidden">
                                    <div className="mb-8">
                                        <a className="text-gray-900 font-bold text-base mb-2 line-clamp"
                                            href={item.url} >
                                            {item.head}
                                        </a>
                                        <p className="text-gray-700 text-sm line-clamp ">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )
                        : (
                            <li key={index} className="py-2 text-sm text-gray-600 border-b border-gray-300" 
                                style={{marginLeft: "17px"}} >
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
            <Topic content={thoiSu} />
            <Topic content={bienDong} />
            <Topic content = {theGioi}/>
            <Topic content = {ngoaiGiao} />
            <Topic content = {kinhTe} />
            <Topic content ={theThao} />
            <Topic content={giaiTri} />
            <Topic content ={xaHoi} />
            <Topic content ={car} />
        </div>
    )
}