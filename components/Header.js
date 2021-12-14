import React from "react";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import Navbar from "./Navbar";
import MenuIcon from '@mui/icons-material/Menu';
import NavMobile from "./NavMobile";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function Header({setActiveNavMobile}) {
    const dayArr = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1;
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const date = `${day}/${month}/${year}`;

    const time = `${dateObj.getHours()}:${String(dateObj.getMinutes()).padStart(2, '0')}`;
    const dayOfWeek = dayArr[dateObj.getDay()];

    
    return (
        <React.Fragment>
            <header>
                <div className="hidden sm:block bg-gray-100">
                    <div className={"flex justify-between bg-gray-100  " + styles.container}>
                        <div className="flex flex-wrap flex-col lg:flex-row" style={{ fontSize: "12px", color: "#777", lineHeight: "27px" }}>
                            <span>
                                <span style={{ marginRight: "3px", verticalAlign: "-3px" }}>
                                    <Image src="/Header/ico-clock.png" width={15} height={15} ></Image>
                                </span>
                                {`${dayOfWeek} ${date} ${time}`}
                            </span>
                            <span className="mx-1.5 my-0 hidden lg:inline" >|</span>
                            <span>
                                <span>
                                    <span style={{ marginRight: "3px", verticalAlign: "-2px" }}>
                                        <Image src="/Header/ico-hotline.png" width={13} height={13} ></Image>
                                    </span>
                                    Hotline: 0879553979
                                </span>
                                <span className="mx-1.5 my-0"   >|</span>
                                <span>
                                    <span style={{ marginRight: "3px", verticalAlign: "-1px" }}>
                                        <Image src="/Header/ico-envelope.png" width={14} height={10} ></Image>
                                    </span>
                                    baoquocte2016@gmail.com
                                </span>
                            </span>
                        </div>
                        <div>
                            <form className="flex mt-3 lg:mt-0 border border-solid border-gray-300" id="frmSearch" name="frmSearch">
                                <input className="md:w-5/6 lg:w-auto" type="text" name="q" placeholder="Nhập từ khóa tìm kiếm" />
                                <button className="px-1" type="submit" name="submit" value="">
                                    <span style={{ position: "relative", top: "3px" }}>
                                        <Image src="/Header/ico-search.png" width={18} height={19} />
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className={"flex justify-between py-2 items-center " + styles.container}>
                    {/* Menu Icon for NavMobile */}
                    <div className="lg:hidden">
                        <div className="flex max-h-screen h-full w-full relative">
                            <div className="ml-1 mr-3">
                                <label onClick={()=>setActiveNavMobile(true)} htmlFor="menuBtn">
                                    <MenuIcon className="text-blue-900" />
                                </label>
                            </div>
                            <span className="text-base sm:text-xl font-bold text-blue-900" >Englsh</span>
                        </div>
                    </div>

                    <a className="w-28 sm:w-auto mr-12">
                        <Image src="/Header/logo.png" width={247} height={90} ></Image>
                    </a>
                    <div className="lg:hidden mr-3">
                        <LocalPhoneIcon />
                    </div>
                    <div className="hidden lg:flex flex-col text-blue-600 font-bold text-sm">
                        <a className="my-3.5 cursor-pointer">
                            <div className="float-right">
                                <span className="mr-1">
                                    <Image src="/Header/ico-24h.png" width={15} height={15} ></Image>
                                </span>
                                <span>Tin 24h</span>
                            </div>
                        </a>
                        <a className="my-3.5 cursor-pointer ">
                            <div className="float-right">
                                <span className="mr-1">
                                    <Image src="/Header/ico-events.png" width={25} height={7}></Image>
                                </span>
                                <span>Danh sách chủ đề</span>
                            </div>
                        </a>
                    </div>
                </div>
            </header>
            <div className={"pb-4 pt-2 lg:py-0 hidden sm:flex justify-between " + styles.container}>
                <div className="hidden md:flex flex-col lg:block mr-10 text-xs font-semibold text-blue-800">
                    <a className="pb-2 pl-2 lg:pl-0 lg:py-0 pr-2 cursor-pointer hover:text-yellow-600">TRANG CHỦ</a>
                    <span className="hidden lg:inline">|</span>
                    <a className="pb-2 px-2 lg:py-0 cursor-pointer hover:text-yellow-600">BỘ NGOẠI GIAO</a>
                    <span className="hidden lg:inline" >|</span>
                    <a className="px-2 lg:py-0 cursor-pointer hover:text-yellow-600">CƠ QUAN ĐẠI DIỆN CỦA VIỆT NAM Ở NƯỚC NGOÀI</a>
                </div>
                <div className="flex items-center ">
                    <iframe className="h-7 w-36" name="f2e598ea48275c" width="1000px" height="1000px"
                        data-testid="fb:like Facebook Social Plugin"
                        title="fb:like Facebook Social Plugin" frameBorder="0"
                        allowtransparency="true" allowFullScreen={true} scrolling="no"
                        allow="encrypted-media"
                        src="https://www.facebook.com/plugins/like.php?action=like&amp;app_id=277749645924281&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1b3be7aeb9a79%26domain%3Dbaoquocte.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fbaoquocte.vn%252Ff1a2b509e74992%26relation%3Dparent.parent&amp;container_width=349&amp;href=https%3A%2F%2Fwww.facebook.com%2Fbaoquocte&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;size=small&amp;width=" >
                    </iframe>
                    <a className="ml-5 mr-3 cursor-pointer">
                        <Image src="/Header/ico-infographic-link.png" width={120} height={26} objectFit="contain"></Image>
                    </a>
                    <a style={{ position: "relative", top: "-1px", cursor: "pointer" }}>
                        <Image src="/Header/ico-emagazine-link.png" width={110} height={26} objectFit="contain" ></Image>
                    </a>
                    <a className="hidden lg:block ml-3 cursor-pointer hover:text-blue-800">
                        <span className="pr-1">
                            <Image src="/Header/ico-english.png" width={19} height={11} objectFit="contain" ></Image>
                        </span>
                        ENGLISH
                    </a>
                </div>
            </div>
            <Navbar />
            <div className="md:hidden whitespace-nowrap">
                <div className="flex w-full text-center py-1 items-center bg-blue-800 text-white mb-4">
                    <a className="px-2 font-bold"
                        href="https://baoquocte.vn/chu-de"
                    // style={{ backgroundImage: "url(/Body/ico-topic.png)" }} 
                    >
                        CHỦ ĐỀ
                    </a>
                    <div className="flex w-full overflow-x-scroll">
                        <a className="px-2 text-sm font-bold "
                            href="https://baoquocte.vn/chu-de/khung-hoang-nang-luong.topic" >
                            Khủng hoảng năng lượng
                        </a>
                        <a className="px-2 text-sm font-bold "
                            href="https://baoquocte.vn/chu-de/bien-dong.topic" >
                            Biển Đông
                        </a>
                        <a className="px-2 text-sm font-bold "
                            href="https://baoquocte.vn/chu-de/cang-thang-nga-ukraine.topic" >
                            Căng thẳng Nga-Ukraine
                        </a>
                        <a className="px-2 text-sm font-bold "
                            href="https://baoquocte.vn/chu-de/ngoai-giao-vaccine.topic" >
                            Ngoại giao vaccine
                        </a>
                        <a className="px-2 text-sm font-bold " href="" >
                            Chảo lửa Trung Đông
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}