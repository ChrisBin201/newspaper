import { useContext, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { NewsContext } from "../Context/NewsContext";
export default function Navbar() {

    const { topicState, setTopicState } = useContext(NewsContext)

    function NavItem({ children, topic, url }) {
        const [open, setOpen] = useState(false);
        // const topic = children[0]
        // const dropdown = children[1] 
        // children.props.topic = {topic};
        // console.log(children)
        return (
            <li className="px-2.5  relative line-separate text-center  z-50 "
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)} >
                <Link href={`/topic/${url}`} >
                    <a onClick={() => setTopicState(topic)} className={`hover:text-yellow-600 ${topicState.includes(topic) ? "text-blue-700" : ""}`}>
                        {topic}
                    </a>
                </Link>
                {open && children}
            </li>
        )
    }
    return (
        <nav className="hidden top-0 z-50 sticky lg:block border-t-4 border-yellow-600 py-2.5 bg-gray-100 mb-4">
            <ul className={"flex items-center text-xs font-semibold " + styles.container} >
                <li className="list-item pr-2.5 text-center relative line-separate">
                    <Link href="/" >
                        <a onClick={() => setTopicState("")} className={`hover:text-yellow-600 `} >
                            <Image src="/Header/ico-home.png" width={15} height={16} />
                        </a>
                    </Link>
                </li>
                <NavItem topic="THỜI SỰ" url="thoi-su" >
                    <DropdownMenu
                        menuItems={['Phân tích chuyện thời sư', 'Suy ngẫm', 'Việt Nam và ASEAN']}
                        topic="THỜI SỰ" />
                </NavItem>
                <li className="px-2.5 relative line-separate text-center">
                    <Link href="/topic/bien-dong-247" >
                        <a onClick={() => setTopicState("BIỂN ĐÔNG 24/7")}  className={`hover:text-yellow-600 ${topicState.includes("BIỂN ĐÔNG 24/7") ? "text-blue-700" : ""}`} >BIỂN ĐÔNG 24/7</a>
                    </Link>
                </li>
                <NavItem topic="THẾ GIỚI" url="the-gioi" >
                    <DropdownMenu
                        menuItems={['Toàn cảnh', 'Tiêu điểm', 'Bình luận', 'Hồ sơ', 'Đọc báo nước ngoài']}
                        topic="THẾ GIỚI" />
                </NavItem>
                <NavItem topic="NGOẠI GIAO" url="ngoai-giao" >
                    <DropdownMenu
                        menuItems={['Tin Bộ Ngoại giao', 'Bảo hộ công dân',
                            'Thường thức Ngoại giao', 'Chuyện ngoại giao']}
                        topic="NGOẠI GIAO" />
                </NavItem>
                <NavItem topic="KINH TẾ" url="kinh-te" >
                    <DropdownMenu
                        menuItems={['Kinh tế thế giới', 'Hội nhập - Phát triển',
                            'Bất động sản', 'Tài chính - Chứng khoán', 'Thương hiệu - Sản phẩm']}
                        topic="KINH TẾ" />
                </NavItem>
                <li className="px-2.5 relative line-separate text-center">
                    <Link href="/topic/nguoi-viet" >
                        <a onClick={() => setTopicState("NGƯỜI VIỆT")}  className={`hover:text-yellow-600 ${topicState.includes("NGƯỜI VIỆT") ? "text-blue-700" : ""}`} >NGƯỜI VIỆT</a>
                    </Link>
                </li>
                <NavItem topic="VĂN HÓA" url="van-hoa" >
                    <DropdownMenu
                        menuItems={['Du lịch', 'Sổ tay văn hóa', 'Góc sách']}
                        topic="VĂN HÓA" />
                </NavItem>
                <NavItem topic="XÃ HỘI" url="xa-hoi" >
                    <DropdownMenu
                        menuItems={['Giáo dục', 'Đời sống', 'Y tế', 'Sổ xố hôm nay']}
                        topic="XÃ HỘI" />
                </NavItem>
                <li className="px-2.5 relative line-separate text-center">
                    <Link href="/topic/giao-duc" >
                        <a onClick={() => setTopicState("GIÁO DỤC")}  className={`hover:text-yellow-600 ${topicState.includes("GIÁO DỤC") ? "text-blue-700" : ""}`}  >GIÁO DỤC</a>
                    </Link>
                </li>
                <NavItem topic="GIẢI TRÍ" url="giai-tri" >
                    <DropdownMenu
                        menuItems={['Hậu trường', 'Chuyện bốn phương', 'Xem - Nghe']}
                        topic="GIẢI TRÍ" />
                </NavItem>
                <li  className="px-2.5 relative line-separate text-center">
                    <Link href="/topic/the-thao" >
                        <a onClick={() => setTopicState("THỂ THAO")} className={`hover:text-yellow-600 ${topicState.includes("THỂ THAO") ? "text-blue-700" : ""}`}  >THỂ THAO</a>
                    </Link>
                </li>
                <li  className="px-2.5 relative line-separate text-center">
                    <Link href="/topic/khoa-hoc-cong-nghe" >
                        <a onClick={() => setTopicState("KHOA HỌC - CÔNG NGHỆ")} className={`hover:text-yellow-600 ${topicState.includes("KHOA HỌC - CÔNG NGHỆ") ? "text-blue-700" : ""}`} >KHOA HỌC - CÔNG NGHỆ</a>
                    </Link>
                </li>
                <li className="px-2.5 relative text-center">
                    <Link href="/topic/o-to" >
                        <a onClick={() => setTopicState("Ô TÔ+")} className={`hover:text-yellow-600 ${topicState.includes("Ô TÔ+") ? "text-blue-700" : ""}`}  >Ô TÔ+</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}