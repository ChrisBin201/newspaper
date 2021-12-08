import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useRef, useState } from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DropdownMobile from './DropdownMobile';
export default function NavMobile() {



  function NavItem({ children, topic, url }) {
    const [open, setOpen] = useState(false);
    const ref = useRef()
    let inlineStyle = open ? { height: ref.current?.scrollHeight } : { height: "0px" }

    return (
      <li className="px-2.5 line-separate z-50 ">
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


  // function DropdownMobile({ menuItems }) {

  //   function DropdownItem(props) {
  //     return (
  //       <a key={props.indexE} href=""
  //         className="py-2 px-4 hover:text-yellow-600 text-sm bg-gray-100" >
  //         {props.children}
  //       </a>
  //     )
  //   }

  //   return (
  //     <React.Fragment>
  //       {menuItems.map((item, i) => (
  //         <DropdownItem indexE={i} >{item}</DropdownItem>
  //       ))}
  //     </React.Fragment>
  //   )
  // }
  return (
      <div className="w-full h-full  lg:hidden">
        <input type="checkbox" name="" id="menuBtn" className={"hidden " + styles.menuBtn} />
        <div className={"w-screen h-screen inset-0 fixed overflow-auto z-50 transform -translate-x-full transition-transform duration-500 bg-white "
          + styles.navMobile}>
          <div className="flex justify-center">
            <a className="block cursor-pointer mt-2">
              <Image src="/Header/logo.png" width={247} height={90} ></Image>
            </a>
            <label htmlFor="menuBtn" className="top-2 right-3 absolute transition-all" >
              <CloseIcon />
            </label>
          </div>
          <ul className="max-h-full w-full transition-all duration-300  flex flex-col " >
            <NavItem topic="THỜI SỰ" url="https://baoquocte.vn/thoi-su" >
              <DropdownMobile
                menuItems={['Phân tích chuyện thời sư', 'Suy ngẫm', 'Việt Nam và ASEAN']} />
            </NavItem>
            <li className="px-2.5 relative line-separate">
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
            <li className="px-2.5 relative line-separate">
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
            <li className="px-2.5 relative line-separate">
              <a className="hover:text-yellow-600" href="https://baoquocte.vn/xa-hoi/giao-duc" >GIÁO DỤC</a>
            </li>
            <NavItem topic="GIẢI TRÍ" url="https://baoquocte.vn/giai-tri" >
              <DropdownMobile
                menuItems={['Hậu trường', 'Chuyện bốn phương', 'Xem - Nghe']} />
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
        </div>
        {/* <div class="max-h-screen h-full w-full relative bg-yellow-200">
          <div class="absolute left-2 top-2">
            <label for="menuBtn">
              <MenuIcon />
            </label>
          </div>
        </div> */}
      </div >)
}
