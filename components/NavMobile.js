import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext, useRef, useState } from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DropdownMobile from './DropdownMobile';
import ExtensionIcon from '@mui/icons-material/Extension';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { NewsContext } from '../Context/NewsContext';
export default function NavMobile({ setActiveNavMobile, active }) {

  const { topicState, setTopicState } = useContext(NewsContext)

  function NavItem({ children, topic, url }) {
    const [open, setOpen] = useState(false);
    const ref = useRef()
    let inlineStyle = open ? { height: ref.current?.scrollHeight } : { height: "0px" }

    return (
      <li className=" line-separate z-50 border-b border-gray-300 ">
        <div className="px-2.5 py-2 flex justify-between" >
          <Link href={`/topic/${url}`}  >
            <a className="hover:text-yellow-600 w-full" 
            onClick={() => {setActiveNavMobile(false); setTopicState(topic)}} >
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
              <input id="email1" className="text-gray-600  focus:outline-none focus:border  bg-white font-normal w-full py-1 flex items-center pl-2 text-sm border-gray-300 rounded border shadow" placeholder="T??n, Tags, M?? t???, T??c gi??? b??i vi???t" />
              <SearchIcon className='absolute right-0 top-0 mr-3.5 mt-2.5 ' fontSize='small' />
            </div>
          </div>
          <ul className="max-h-full w-full transition-all duration-300  flex flex-col " >
            <NavItem topic="TH???I S???" url="thoi-su" >
              <DropdownMobile
                menuItems={['Ph??n t??ch chuy???n th???i s??', 'Suy ng???m', 'Vi???t Nam v?? ASEAN']}
                activeNav={setActiveNavMobile}
                topic="TH???I S???" />
            </NavItem>
            <li className="px-2.5 py-2 border-b border-gray-300 relative line-separate">
              <Link href="/topic/bien-dong-247" >
                <a className="hover:text-yellow-600" onClick={() => setActiveNavMobile(false)} >
                  BI???N ????NG 24/7
                </a>
              </Link>
            </li>
            <NavItem topic="TH??? GI???I" url="the-gioi" >
              <DropdownMobile
                menuItems={['To??n c???nh', 'Ti??u ??i???m', 'B??nh lu???n', 'H??? s??', '?????c b??o n?????c ngo??i']}
                activeNav={setActiveNavMobile}
                topic="TH??? GI???I" />
            </NavItem>
            <NavItem topic="NGO???I GIAO" url="ngoai-giao" >
              <DropdownMobile
                menuItems={['Tin B??? Ngo???i giao', 'B???o h??? c??ng d??n',
                  'Th?????ng th???c Ngo???i giao', 'Chuy???n ngo???i giao']}
                activeNav={setActiveNavMobile}
                topic="NGO???I GIAO" />
            </NavItem>
            <NavItem topic="KINH T???" url="kinh-te" >
              <DropdownMobile
                menuItems={['Kinh t??? th??? gi???i', 'H???i nh???p - Ph??t tri???n',
                  'B???t ?????ng s???n', 'T??i ch??nh - Ch???ng kho??n', 'Th????ng hi???u - S???n ph???m']}
                activeNav={setActiveNavMobile}
                topic="KINH T???" />
            </NavItem>
            <li className="px-2.5 py-2 border-b border-gray-300 relative line-separate">
              <Link href="/topic/nguoi-viet" >
                <a className="hover:text-yellow-600" onClick={() => setActiveNavMobile(false)} >
                  NG?????I VI???T
                </a>
              </Link>
            </li>
            <NavItem topic="V??N H??A" url="van-hoa" >
              <DropdownMobile
                menuItems={['Du l???ch', 'S??? tay v??n h??a', 'G??c s??ch']}
                activeNav={setActiveNavMobile}
                topic="V??N H??A" />
            </NavItem>
            <NavItem topic="X?? H???I" url="xa-hoi" >
              <DropdownMobile
                menuItems={['Gi??o d???c', '?????i s???ng', 'Y t???', 'S??? x??? h??m nay']}
                activeNav={setActiveNavMobile}
                topic="X?? H???I" />
            </NavItem>
            <li className="px-2.5 py-2 border-b border-gray-300 relative line-separate">
              <Link href="/topic/giao-duc" >
                <a className="hover:text-yellow-600" onClick={() => setActiveNavMobile(false)} >
                  GI??O D???C
                </a>
              </Link>
            </li>
            <NavItem topic="GI???I TR??" url="giai-tri" >
              <DropdownMobile
                menuItems={['H???u tr?????ng', 'Chuy???n b???n ph????ng', 'Xem - Nghe']}
                activeNav={setActiveNavMobile}
                topic="GI???I TR??"  />
            </NavItem>
            <li className="px-2.5 py-2 border-b border-gray-300 relative line-separate">
              <Link href="/topic/the-thao" >
                <a className="hover:text-yellow-600" onClick={() => setActiveNavMobile(false)} >
                  TH??? THAO
                </a>
              </Link>
            </li>
            <li className="px-2.5 py-2 border-b border-gray-300 relative line-separate">
              <Link href="/topic/khoa-hoc-cong-nghe" >
                <a className="hover:text-yellow-600" onClick={() => setActiveNavMobile(false)}  >
                  KHOA H???C - C??NG NGH???
                </a>
              </Link>
            </li>
            <li className="px-2.5 py-2 border-b border-gray-300 relative line-separate">
              <Link href="/topic/o-to" >
                <a className="hover:text-yellow-600" onClick={() => setActiveNavMobile(false)} >
                  ?? T??+
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
              <div>Trang ch???</div>
            </a>
          </Link>
          <Link href="/topic/chu-de" >
            <a className="flex flex-col items-center" onClick={()=>setTopicState("CH??? ?????")} >
              <ExtensionIcon />
              <div>Ch??? ?????</div>
            </a>
          </Link>
          <Link href="/topic/news" >
            <a className="flex flex-col items-center" onClick={()=>setTopicState("CH??? ????? / Tin m???i")} >
              <NotificationsIcon className="text-red-600" />
              <div>Tin m???i</div>
            </a>
          </Link>
          <div onClick={() => setActiveNavMobile(true)} htmlFor="menuBtn" className="flex flex-col items-center">
            <MenuIcon />
            <div>Danh m???c</div>
          </div>
        </nav>
      </div >
    </>
  )
}
