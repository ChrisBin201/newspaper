import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useRef, useState } from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DropdownMobile from './DropdownMobile';
import ExtensionIcon from '@mui/icons-material/Extension';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function NavMobile( {setActiveNavMobile, active} ) {


  function NavItem({ children, topic, url }) {
    const [open, setOpen] = useState(false);
    const ref = useRef()
    let inlineStyle = open ? { height: ref.current?.scrollHeight } : { height: "0px" }

    return (
      <li className="px-2.5 py-0.5 line-separate z-50 ">
        <div className="flex justify-between" >
          <a className="hover:text-yellow-600 w-full" href={url} >{topic}</a>
          <ChevronRightIcon
            className={`transform ${open ? "rotate-90" : ""}`}
            onClick={() => setOpen(!open)} />
        </div>
        <div ref={ref} className={`transition-all duration-300 overflow-hidden  whitespace-nowrap flex flex-col -left-0.5 `}
          style={inlineStyle}
        >
          {children}
        </div>
      </li>
    )
  }

  return (
    <>
      <div className="w-full h-full lg:hidden">
        {/* <input type="checkbox" name="" id="menuBtn" className={"hidden menuBtn "} /> */}
        <div className={`w-screen h-screen inset-0 fixed overflow-auto z-50 transform  transition-transform duration-500 bg-white navMobile 
        ${active? "translate-x-0":"-translate-x-full"}`
        }>
          <div className="flex justify-center">
            <a className="block cursor-pointer mt-2">
              <Image src="/Header/logo.png" width={247} height={90} ></Image>
            </a>
            <label onClick={()=>{setActiveNavMobile(false)}} htmlFor="menuBtn" className="top-2 right-3 absolute transition-all" >
              <CloseIcon />
            </label>
          </div>
          <ul className="max-h-full w-full transition-all duration-300  flex flex-col " >
            <NavItem topic="THỜI SỰ" url="https://baoquocte.vn/thoi-su" >
              <DropdownMobile
                menuItems={['Phân tích chuyện thời sư', 'Suy ngẫm', 'Việt Nam và ASEAN']} />
            </NavItem>
            <li className="px-2.5 py-0.5 relative line-separate">
              <a className="hover:text-yellow-600" href="https://baoquocte.vn/bien-dong-247" >BIỂN ĐÔNG 24/7</a>
            </li>
            <NavItem topic="THẾ GIỚI" url="https://baoquocte.vn/the-gioi" >
              <DropdownMobile
                menuItems={['Toàn cảnh', 'Tiêu điểm', 'Bình luận', 'Hồ sơ', 'Đọc báo nước ngoài']} />
            </NavItem>
            <NavItem topic="NGOẠI GIAO" url="https://baoquocte.vn/ngoai-giao" >
              <DropdownMobile
                menuItems={['Tin Bộ Ngoại giao', 'Bảo hộ công dân',
                  'Thường thức Ngoại giao', 'Chuyện ngoại giao']} />
            </NavItem>
            <NavItem topic="KINH TẾ" url="https://baoquocte.vn/kinh-te" >
              <DropdownMobile
                menuItems={['Kinh tế thế giới', 'Hội nhập - Phát triển',
                  'Bất động sản', 'Tài chính - Chứng khoán', 'Thương hiệu - Sản phẩm']} />
            </NavItem>
            <li className="px-2.5 py-0.5 relative line-separate">
              <a className="hover:text-yellow-600" href="https://baoquocte.vn/nguoi-viet" >NGƯỜI VIỆT</a>
            </li>
            <NavItem topic="VĂN HÓA" url="https://baoquocte.vn/van-hoa" >
              <DropdownMobile
                menuItems={['Du lịch', 'Sổ tay văn hóa', 'Góc sách']} />
            </NavItem>
            <NavItem topic="XÃ HỘI" url="https://baoquocte.vn/xa-hoi" >
              <DropdownMobile
                menuItems={['Giáo dục', 'Đời sống', 'Y tế', 'Sổ xố hôm nay']} />
            </NavItem>
            <li className="px-2.5 py-0.5 relative line-separate">
              <a className="hover:text-yellow-600" href="https://baoquocte.vn/xa-hoi/giao-duc" >GIÁO DỤC</a>
            </li>
            <NavItem topic="GIẢI TRÍ" url="https://baoquocte.vn/giai-tri" >
              <DropdownMobile
                menuItems={['Hậu trường', 'Chuyện bốn phương', 'Xem - Nghe']} />
            </NavItem>
            <li className="px-2.5 py-0.5 relative line-separate">
              <a className="hover:text-yellow-600" href="https://baoquocte.vn/the-thao" >THỂ THAO</a>
            </li>
            <li className="px-2.5 py-0.5 relative line-separate">
              <a className="hover:text-yellow-600" href="https://baoquocte.vn/khoa-hoc-cong-nghe" >KHOA HỌC - CÔNG NGHỆ</a>
            </li>
            <li className="px-2.5 py-0.5 relative line-separate">
              <a className="hover:text-yellow-600" href="https://baoquocte.vn/o-to" >Ô TÔ+</a>
            </li>
          </ul>
        </div>
        
        {/* overlays for mobile nav */}
        {/* <div className={`lg:hidden fixed inset-0 h-screen w-screen hidden opacity-70 bg-black z-40 menu_overlay `} >
        </div> */}
        <nav className="flex py-2.5 px-5 text-xs items-center justify-between fixed bottom-0 left-0 z-40 right-0 w-full bg-gray-100">
            <a href="#" className="flex flex-col items-center">
                <HomeIcon />
                <div>Trang chủ</div>
            </a>
            <a href="https://baoquocte.vn/chu-de" className="flex flex-col items-center">
                <ExtensionIcon  />
                <div>Chủ đề</div>
            </a>
            <a href="https://baoquocte.vn/tin-moi" className="flex flex-col items-center">
                <NotificationsIcon  className="text-red-600" />
                <div>Tin mới</div>
            </a>
            <div onClick={()=>setActiveNavMobile(true)} htmlFor="menuBtn" className="flex flex-col items-center">
                <MenuIcon  />
                <div>Danh mục</div>
            </div>
        </nav>
      </div >
    </>
  )
}
