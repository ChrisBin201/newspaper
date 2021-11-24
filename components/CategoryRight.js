import Image from "next/image"
import { anPhamdb } from "../Data/AnPhamDacBiet"
import { baoIn } from "../Data/BaoIn"

export default function CategoryRight(){

    function Topic({content}){
        return(
            <div style={{width: "300px"}} className="mb-4" >
                <div className="text-2xl border-b border-red-600 " >{content.header}</div>
                <ul className="mt-4" >
                    {content.body.map((item,index) =>(
                        <li>
                            <a href={item.url} ></a>
                            <Image src={item.img} width={300} height={450} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return(
        <div>
           <Topic content={baoIn} />
           <Topic content={anPhamdb} />
        </div>
    )
}