import Link from "next/link"
import { useContext } from "react"
import { NewsContext } from "../Context/NewsContext";
export default function DropdownMenu({menuItems,topic}){

    const { topicState, setTopicState } = useContext(NewsContext)
    
    function DropdownItem(props){
        return(
           <Link href={`/topic/${props.children.toString()}`} >
               <a   key={props.index} 
                    onClick={() => {setTopicState(`${topic} / ${props.text}`)}}
                    className=" text-left py-2 px-6 hover:text-yellow-600 text-sm bg-gray-200" >
                   {props.children}
               </a>
           </Link> 
        )
    }

    return(
        <div className="absolute whitespace-nowrap flex flex-col -left-0.5">
            <div className="bg-transparent w-5 h-1.5"></div>
            {menuItems.map((item,i) =>(
                <DropdownItem key={i} index={i} text ={item} >{item}</DropdownItem>
            ))}
        </div>
    )
}