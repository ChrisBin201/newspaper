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
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
export default function NavMobile({ setActiveNavMobile, active }) {


  function NavItem({ children, topic, url }) {
    const [open, setOpen] = useState(false);
    const ref = useRef()
    let inlineStyle = open ? { height: ref.current?.scrollHeight } : { height: "0px" }

    return (
      <li className=" line-separate z-50 border-b border-gray-300 ">
        <div className="px-2.5 py-2 flex justify-between" >
          <Link href={`/topic/${url}`}  >
            <a className="hover:text-yellow-600 w-full" onClick={() => setActiveNavMobile(false)} >
              {topic}
            </a>
          </Link>
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
        <div className={`w-screen h-screen inset-0 fixed overflow-auto z-50 transform  transition-transform duration-300 bg-white navMobile 
        ${active ? "translate-x-0" : "-translate-x-full"}`
        }>
          <div className="flex justify-center">
            <Link href="/" >
              <a className="block cursor-pointer mt-2" onClick={() => setActiveNavMobile(false)} >
                <Image src="/Header/logo.png" width={150} height={50} ></Image>
              </a>
            </Link>
            <label onClick={() => { setActiveNavMobile(false) }} htmlFor="menuBtn" className="top-2 right-3 absolute transition-all" >
              <CloseIcon />
            </label>
          </div>
          {/* SEARCH INPUT */}
          <div className="bg-gray-300  flex items-center justify-center " style={{ fontFamily: '"Lato", sans-serif' }}>
            <div className="flex flex-col py-1 w-full px-2 relative ">
              <label htmlFor="email1" className=" text-gray-400 text-sm tracking-normal " />
              <input id="email1" className="text-gray-600  focus:outline-none focus:border  bg-white font-normal w-full py-1 flex items-center pl-2 text-sm border-gray-300 rounded border shadow" placeholder="Tên, Tags, Mô tả, Tác giả bài viết" />
              <SearchIcon className='absolute right-0 top-0 mr-3.5 mt-2.5 ' fontSize='small' />
            </div>
          </div>
          <ul className="max-h-full w-full transition-all duration-300  flex flex-col " >
            <NavItem topic="THỜI SỰ" url="thoi-su" >
              <DropdownMobile
                menuItems={['Phân tích chuyện thời sư', 'Suy ngẫm', 'Việt Nam và ASEAN']}
                activeNav={setActiveNavMobile} />
            </NavItem>
            <li className="px-2.5 py-2 border-b border-gray-300 relative line-separate">
              <Link href="/topic/bien-dong-247" >
                <a className="hover:text-yellow-600" onClick={() => setActiveNavMobile(false)} >
                  BIỂN ĐÔNG 24/7
                </a>
              </Link>
            </li>
            <NavItem topic="THẾ GIỚI" url="the-gioi" >
              <DropdownMobile
                menuItems={['Toàn cảnh', 'Tiêu điểm', 'Bình luận', 'Hồ sơ', 'Đọc báo nước ngoài']}
                activeNav={setActiveNavMobile} />
            </NavItem>
            <NavItem topic="NGOẠI GIAO" url="ngoai-giao" >
              <DropdownMobile
                menuItems={['Tin Bộ Ngoại giao', 'Bảo hộ công dân',
                  'Thường thức Ngoại giao', 'Chuyện ngoại giao']}
                activeNav={setActiveNavMobile} />
            </NavItem>
            <NavItem topic="KINH TẾ" url="kinh-te" >
              <DropdownMobile
                menuItems={['Kinh tế thế giới', 'Hội nhập - Phát triển',
                  'Bất động sản', 'Tài chính - Chứng khoán', 'Thương hiệu - Sản phẩm']}
                activeNav={setActiveNavMobile} />
            </NavItem>
            <li className="px-2.5 py-2 border-b border-gray-300 relative line-separate">
              <Link href="/topic/nguoi-viet" >
                <a className="hover:text-yellow-600" onClick={() => setActiveNavMobile(false)} >
                  NGƯỜI VIỆT
                </a>
              </Link>
            </li>
            <NavItem topic="VĂN HÓA" url="van-hoa" >
              <DropdownMobile
                menuItems={['Du lịch', 'Sổ tay văn hóa', 'Góc sách']}
                activeNav={setActiveNavMobile} />
            </NavItem>
            <NavItem topic="XÃ HỘI" url="xa-hoi" >
              <DropdownMobile
                menuItems={['Giáo dục', 'Đời sống', 'Y tế', 'Sổ xố hôm nay']}
                activeNav={setActiveNavMobile} />
            </NavItem>
            <li className="px-2.5 py-2 border-b border-gray-300 relative line-separate">
              <Link href="/topic/giao-duc" >
                <a className="hover:text-yellow-600" onClick={() => setActiveNavMobile(false)} >
                  GIÁO DỤC
                </a>
              </Link>
            </li>
            <NavItem topic="GIẢI TRÍ" url="giai-tri" >
              <DropdownMobile
                menuItems={['Hậu trường', 'Chuyện bốn phương', 'Xem - Nghe']}
                activeNav={setActiveNavMobile} />
            </NavItem>
            <li className="px-2.5 py-2 border-b border-gray-300 relative line-separate">
              <Link href="/topic/the-thao" >
                <a className="hover:text-yellow-600" onClick={() => setActiveNavMobile(false)} >
                  THỂ THAO
                </a>
              </Link>
            </li>
            <li className="px-2.5 py-2 border-b border-gray-300 relative line-separate">
              <Link href="/topic/khoa-hoc-cong-nghe" >
                <a className="hover:text-yellow-600" onClick={() => setActiveNavMobile(false)}  >
                  KHOA HỌC - CÔNG NGHỆ
                </a>
              </Link>
            </li>
            <li className="px-2.5 py-2 border-b border-gray-300 relative line-separate">
              <Link href="/topic/o-to" >
                <a className="hover:text-yellow-600" onClick={() => setActiveNavMobile(false)} >
                  Ô TÔ+
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* overlays for mobile nav */}
        {/* <div className={`lg:hidden fixed inset-0 h-screen w-screen opacity-70 bg-black z-40 menu_overlay `} >
        </div> */}
        <nav className="flex py-2.5 px-5 text-xs items-center justify-between fixed bottom-0 left-0 z-40 right-0 w-full bg-gray-100">
          <Link href="/" >
            <a className="flex flex-col items-center">
              <HomeIcon />
              <div>Trang chủ</div>
            </a>
          </Link>
          <Link href="/topic/chu-de" >
            <a className="flex flex-col items-center">
              <ExtensionIcon />
              <div>Chủ đề</div>
            </a>
          </Link>
          <Link href="/topic/news" >
            <a className="flex flex-col items-center">
              <NotificationsIcon className="text-red-600" />
              <div>Tin mới</div>
            </a>
          </Link>
          <div onClick={() => setActiveNavMobile(true)} htmlFor="menuBtn" className="flex flex-col items-center">
            <MenuIcon />
            <div>Danh mục</div>
          </div>
        </nav>
      </div >
    </>
  )
}
