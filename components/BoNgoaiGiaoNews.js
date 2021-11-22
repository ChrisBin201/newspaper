import {boNgoaiGiaoNews} from "../Data/boNgoaiGiaoNews"
import Image from "next/image"
export default function BoNgoaiGiaoNews(){

    return(
        <div>
            <div>Tin Bộ Ngoại giao</div>
            <div>
                {boNgoaiGiaoNews.map((item,index)=>{
                    return(
                        index===0?
                        (<div style={{width:"300px"}}>
                            <Image src={item.img} width={300} height={169} />
                            <div>{item.title}</div>
                        </div>)
                    
                        :
                        (
                            <div style={{width:"300px"}} >
                                {item.title}
                            </div>
                        )
                    )
                })}
            </div>
        </div>
    )
}