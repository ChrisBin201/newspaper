import {boNgoaiGiaoNews} from "../Data/boNgoaiGiaoNews"
import Image from "next/image"
export default function BoNgoaiGiaoNews(){

    return(
        <div style={{width:"300px"}} className="mt-3">
            <span className="text-2xl border-b border-red-600 ">Tin Bộ Ngoại giao</span>
            <div className="mt-3 bg-gray-100 pb-2 " >
                {boNgoaiGiaoNews.map((item,index)=>{
                    return(
                        index===0?
                        (<div>
                                <Image src={item.img} width={300} height={169} />
                            <div className="text-gray-900 font-bold text-sm mb-2 mx-3" >
                                {item.title}
                            </div>
                        </div>)
                    
                        :
                        (
                            <div className="text-sm pb-2 mb-2 mx-3 border-b border-dashed border-gray-300" >
                                {item.title}
                            </div>
                        )
                    )
                })}
            </div>
        </div>
    )
}