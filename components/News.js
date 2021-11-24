import {news} from "../Data/news"

export default function News(){

    return(
        <div className="bg-gray-100 p-2">
            <div className="text-red-600 text-3xl">Tin mới</div>
            <ul className="h-full">
                {news.map((item,index)=>{
                    return(
                    <li className={`flex relative py-4 mx-4 
                                    ${index!==news.length-1? "border-b border-dashed border-gray-600":""}`}>
                        <div className="align-text-top font-serif font-thin 
                        text-4xl text-gray-300 float-left w-16 absolute ">
                            {index+1}
                        </div>
                        <div className="text-sm pl-10 ">{item.content}</div>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}