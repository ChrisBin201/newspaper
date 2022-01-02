import React from "react"
import Link from "next/link"
export default function DropdownMobile({ menuItems, activeNav }) {

    function DropdownItem(props) {
        return (
            <Link href={`/topic/${props.children.toString().replace("/","")}`} >
                <a  onClick={()=> activeNav(false)}
                    className="block py-2 px-4 hover:text-yellow-600 text-sm bg-gray-300" >
                    {props.children}
                </a>
            </Link>
        )
    }

    return (
        <React.Fragment>
            {menuItems.map((item, i) => (
                <div key={i} >
                    <DropdownItem>{item}</DropdownItem>
                </div>
            ))}
        </React.Fragment>
    )
}