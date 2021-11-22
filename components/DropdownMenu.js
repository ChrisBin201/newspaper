
export default function DropdownMenu({menuItems}){
    
    function DropdownItem(props){
        return(
           <a href ="#" className="py-2 px-4 hover:text-yellow-600 text-sm" >
               {props.children}
           </a> 
        )
    }

    return(
        <div className="absolute bg-gray-100 whitespace-nowrap flex flex-col ">
            {menuItems.map(item =>(
                <DropdownItem>{item}</DropdownItem>
            ))}
        </div>
        // <div className={styles.dropdownMenu}>
        //     <DropdownItem>Item 1</DropdownItem>
        //     <DropdownItem>Item 2</DropdownItem>
        // </div>
    )
}