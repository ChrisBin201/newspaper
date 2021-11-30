
export default function DropdownMenu({menuItems}){
    
    function DropdownItem(props){
        return(
           <a key={props.index} href ="" className="py-2 px-4 hover:text-yellow-600 text-sm bg-gray-100" >
               {props.children}
           </a> 
        )
    }

    return(
        <div className="absolute whitespace-nowrap flex flex-col -left-0.5">
            <div className="bg-transparent w-5 h-1.5"></div>
            {menuItems.map((item,i) =>(
                <DropdownItem index={i} >{item}</DropdownItem>
            ))}
        </div>
        // <div className={styles.dropdownMenu}>
        //     <DropdownItem>Item 1</DropdownItem>
        //     <DropdownItem>Item 2</DropdownItem>
        // </div>
    )
}