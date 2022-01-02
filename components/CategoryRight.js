import Image from "next/image"
import { anPhamdb } from "../Data/AnPhamDacBiet"
import { baoIn } from "../Data/BaoIn"

export default function CategoryRight(){

    function TopicImage({content}){
        return(
            <div className="mb-4" >
                <span className="text-2xl border-b border-red-600 " >{content.header}</span>
                <ul className="mt-4" >
                    {content.body.map((item,index) =>(
                        <li key={index} >
                            <a href={item.url} ></a>
                            <Image src={item.img} width={310} height={450} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return(
        <div className="hidden md:block col-span-1 lg:col-span-2" >
           <TopicImage content={baoIn} />
           <TopicImage content={anPhamdb} />
        </div>
    )
}