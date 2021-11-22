import React from "react";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import Navbar from "./Navbar";
export default function Header(){
    const dayArr = ["Chủ nhật","Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]
    const dateObj = new Date();
    const month = dateObj.getMonth()+1;
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const date = `${day}/${month}/${year}`;

    const time = `${dateObj.getHours()}:${String(dateObj.getMinutes()).padStart(2, '0')}`;
    const dayOfWeek = dayArr[dateObj.getDay()];
    return(
        <React.Fragment>
            <header>
                <div className="bg-gray-100">
                    <div className={"flex justify-between bg-gray-100 " +styles.container}>
                        <div style={{fontSize:"12px",color:"#777",lineHeight:"27px"}}>
                            <span>
                                <span style={{marginRight: "3px", verticalAlign:"-3px"}}>
                                    <Image src="/Header/ico-clock.png" width={15} height={15} ></Image>
                                </span>
                                {`${dayOfWeek} ${date} ${time}`}
                            </span>
                            <span style={{margin: "0 6px"}} >|</span>
                            <span>
                                <span style={{marginRight: "3px", verticalAlign:"-2px"}}>
                                    <Image src="/Header/ico-hotline.png" width={13} height={13} ></Image>
                                </span>
                                Hotline: 0879553979
                            </span>
                            <span style={{margin: "0 6px"}}  >|</span>
                            <span>
                                <span style={{marginRight: "3px", verticalAlign:"-1px"}}>
                                    <Image src="/Header/ico-envelope.png" width={14} height={10} ></Image>
                                </span>
                                baoquocte2016@gmail.com
                            </span>
                        </div>
                        <div>
                            <form className="border border-solid border-gray-300" id="frmSearch" name="frmSearch">
                                <input type="text"  name="q" placeholder="Nhập từ khóa tìm kiếm"/>
                                    <button className="px-1" type="submit" name="submit" value="">
                                        <span style={{position:"relative", top: "3px"}}>
                                            <Image src="/Header/ico-search.png" width={18} height={19}  />
                                        </span>
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={"flex justify-between py-2 " +styles.container}>
                    <a className="block cursor-pointer">
                        <Image src="/Header/logo.png" width={247} height={90} ></Image>
                    </a>
                    <div className="flex flex-col text-blue-600 font-bold text-sm">
                        <a className="my-3.5 cursor-pointer">
                            <div className ="float-right">
                                <span  className="mr-1">
                                    <Image src="/Header/ico-24h.png" width={15} height={15} ></Image>
                                </span>
                                <span>Tin 24h</span>
                            </div>
                        </a>
                        <a className="my-3.5 cursor-pointer flo">
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
            <div className={"flex justify-between " +styles.container}>
                <div className="text-xs font-semibold text-blue-800">
                    <a className="pr-2 cursor-pointer hover:text-yellow-600">TRANG CHỦ</a>
                    <span>|</span>
                    <a className="px-2 cursor-pointer hover:text-yellow-600">BỘ NGOẠI GIAO</a>
                    <span>|</span>
                    <a className="px-2 cursor-pointer hover:text-yellow-600">CƠ QUAN ĐẠI DIỆN CỦA VIỆT NAM Ở NƯỚC NGOÀI</a>
                </div>
                <div className="flex ">
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
                    <a style={{position:"relative",top:"-1px",cursor:"pointer"}}>
                        <Image src="/Header/ico-emagazine-link.png" width={110} height={26} objectFit="contain" ></Image>
                    </a>
                    <a className="ml-3 cursor-pointer hover:text-blue-800">
                        <span className="pr-1">
                            <Image src="/Header/ico-english.png" width={19} height={11} objectFit="contain" ></Image>
                        </span>
                        ENGLISH
                    </a>
                </div>
            </div>
            <Navbar/>
        </React.Fragment>
    )
}