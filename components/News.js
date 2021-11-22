import {news} from "../Data/news"

export default function News(){

    return(
        <div className="bg-gray-100">
            <div className="text-red-600 text-2xl">Tin mới</div>
            <ul className="h-full">
                {news.map((item,index)=>{
                    return(
                    <li className="flex ">
                        <div className="align-text-top font-serif font-thin 
                        text-5xl text-gray-300 float-left w-16  ">
                            {index+1}
                        </div>
                        <div className="text-sm ">{item.content}</div>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}