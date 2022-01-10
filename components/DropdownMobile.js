import React, { useContext } from "react"
import Link from "next/link"
import { NewsContext } from "../Context/NewsContext"
export default function DropdownMobile({ menuItems, activeNav, topic }) {

    const { topicState, setTopicState } = useContext(NewsContext)

    function DropdownItem(props) {
        return (
            <Link href={`/topic/${props.children.toString().replace("/","")}`} >
                <a  onClick={()=> {setTopicState(`${topic} / ${props.text}`) ; activeNav(false)}}
                    className="block py-2 px-4 hover:text-yellow-600 text-sm bg-gray-200" >
                    {props.children}
                </a>
            </Link>
        )
    }

    return (
        <React.Fragment>
            {menuItems.map((item, i) => (
                <div key={i} >
                    <DropdownItem text={item} >{item}</DropdownItem>
                </div>
            ))}
        </React.Fragment>
    )
}