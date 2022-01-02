import Link from "next/link"
export default function DropdownMenu({menuItems}){
    
    function DropdownItem(props){
        return(
           <Link href={`/topic/${props.children.toString()}`} >
               <a key={props.index} className=" text-left py-2 px-6 hover:text-yellow-600 text-sm bg-gray-200" >
                   {props.children}
               </a>
           </Link> 
        )
    }

    return(
        <div className="absolute whitespace-nowrap flex flex-col -left-0.5">
            <div className="bg-transparent w-5 h-1.5"></div>
            {menuItems.map((item,i) =>(
                <DropdownItem key={i} index={i} >{item}</DropdownItem>
            ))}
        </div>
    )
}