import { boNgoaiGiaoNews } from "../Data/boNgoaiGiaoNews"
import Image from "next/image"
export default function BoNgoaiGiaoNews() {

    return (
        <div
            // style={{width:"300px"}} 
            className="mt-3">
            <a href="" className="hover:text-blue-700 text-2xl border-b border-red-600 ">
                Tin Bộ Ngoại giao
            </a>
            <div className="mt-3 bg-gray-100 pb-2 " >
                {boNgoaiGiaoNews.map((item, index) => {
                    return (
                        index === 0 ?
                            (<div key={index} className=" flex md:block pb-3 md:pb-0" >
                                <a href="">
                                    <Image src={item.img} width={300} height={169} />
                                </a>
                                <a className="hover:text-blue-700 block text-gray-900 font-bold text-sm mb-2 mx-3 pt-2 md:pt-0" >
                                    {item.title}
                                </a>
                            </div>)

                            :
                            (
                                <a key={index} href="" className="block hover:text-blue-700 text-sm pb-2 mb-2 mx-3 border-b border-dashed border-gray-300" >
                                    {item.title}
                                </a>
                            )
                    )
                })}
            </div>
        </div>
    )
}