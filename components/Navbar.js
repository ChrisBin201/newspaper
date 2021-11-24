import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Image from "next/image";
import styles from '../styles/Home.module.css'
export default function Navbar(){

    function NavItem({children, topic, url}){
        const [open,setOpen] = useState(false);
        // const topic = children[0]
        // const dropdown = children[1] 
        console.log(children)
        return(
            <li className="px-2.5 relative line-separate z-50 " 
                onMouseEnter={() => setOpen(true)} 
                onMouseLeave={() =>setOpen(false)} >
                <a className="hover:text-yellow-600" href={url}>{topic}</a>
                {open && children}
            </li>
        )
    }
    return(
        <nav className="border-t-4 border-yellow-600 py-2.5 bg-gray-100 mb-4">
            <ul className={"flex text-xs font-semibold " +styles.container} >
                <li className="pr-2.5">
                    <a className="hover:text-yellow-600" href="">
                        <Image src="/Header/ico-home.png" width={15} height={16} />
                    </a>
                </li>
                <NavItem topic="THỜI SỰ" url="https://baoquocte.vn/thoi-su" >
                    <DropdownMenu 
                    menuItems={['Phân tích chuyện thời sư','Suy ngẫm','Việt Nam và ASEAN']} />
                </NavItem>
                <li className="px-2.5 relative line-separate">
                    <a className="hover:text-yellow-600" href="https://baoquocte.vn/bien-dong-247" >BIỂN ĐÔNG 24/7</a>
                </li>
                <NavItem topic="THẾ GIỚI" url="https://baoquocte.vn/the-gioi" >
                    <DropdownMenu 
                    menuItems={['Toàn cảnh','Tiêu điểm','Bình luận','Hồ sơ','Đọc báo nước ngoài']} />
                </NavItem>
                <NavItem topic="NGOẠI GIAO" url="https://baoquocte.vn/ngoai-giao" >
                    <DropdownMenu 
                    menuItems={['Tin Bộ Ngoại giao','Bảo hộ công dân',
                                'Thường thức Ngoại giao','Chuyện ngoại giao']} />
                </NavItem>
                <NavItem topic="KINH TẾ" url="https://baoquocte.vn/kinh-te" >
                    <DropdownMenu 
                    menuItems={['Kinh tế thế giới','Hội nhập - Phát triển',
                            'Bất động sản','Tài chính - Chứng khoán','Thương hiệu - Sản phẩm']}/>
                </NavItem>
                <li className="px-2.5 relative line-separate">
                    <a className="hover:text-yellow-600" href="https://baoquocte.vn/nguoi-viet" >NGƯỜI VIỆT</a>
                </li>
                <NavItem topic="VĂN HÓA" url="https://baoquocte.vn/van-hoa" >
                    <DropdownMenu 
                    menuItems={['Du lịch','Sổ tay văn hóa','Góc sách']} />
                </NavItem>
                <NavItem topic="XÃ HỘI" url="https://baoquocte.vn/xa-hoi" >
                    <DropdownMenu 
                    menuItems={['Giáo dục','Đời sống','Y tế','Sổ xố hôm nay']} />
                </NavItem>
                <li className="px-2.5 relative line-separate">
                    <a className="hover:text-yellow-600" href="https://baoquocte.vn/xa-hoi/giao-duc" >GIÁO DỤC</a>
                </li>
                <NavItem topic="GIẢI TRÍ" url="https://baoquocte.vn/giai-tri" >
                    <DropdownMenu 
                    menuItems={['Hậu trường','Chuyện bốn phương','Xem - Nghe']} />
                </NavItem>
                <li className="px-2.5 relative line-separate">
                    <a className="hover:text-yellow-600" href="https://baoquocte.vn/the-thao" >THỂ THAO</a>
                </li>
                <li className="px-2.5 relative line-separate">
                    <a className="hover:text-yellow-600" href="https://baoquocte.vn/khoa-hoc-cong-nghe" >KHOA HỌC - CÔNG NGHỆ</a>
                </li>
                <li className="px-2.5 relative line-separate">
                    <a className="hover:text-yellow-600" href="https://baoquocte.vn/o-to" >Ô TÔ+</a>
                </li>
            </ul>
        </nav>
    )
}