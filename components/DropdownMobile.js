import React from "react"

export default function DropdownMobile({ menuItems }) {

    function DropdownItem(props) {
        return (
            <a href=""
                className="py-2 px-4 hover:text-yellow-600 text-sm bg-gray-100" >
                {props.children}
            </a>
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