import styles from '../../styles/Home.module.css'
import { postData } from '../../Data/postData'
import Image from 'next/image';
import PrintIcon from '@mui/icons-material/Print';
import Link from 'next/link';
import Card from '../../components/Card';
import CovidNews from '../../components/CovidNews';
import { contentLeft } from '../../Data/content-left';
import TopicPost from '../../components/TopicPost';
import { analyzeThoiSu } from '../../Data/ThoiSuAnalyzing';
import { thoiSu } from '../../Data/ThoiSu';
import { bienDong } from '../../Data/BienDong';
import { theGioi } from '../../Data/TheGioi';
import { MultimediaNews } from "../../Data/MultimediaNews";
import { topic } from "../../Data/TopicData";
import React, { useContext } from 'react';
import { NewsContext } from '../../Context/NewsContext';
export default function Post() {

    const {topicState, setTopicState} = useContext(NewsContext);
    // console.log(router)
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1;
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const date = `${day}/${month}/${year}`;

    const time = `${dateObj.getHours()}:${String(dateObj.getMinutes()).padStart(2, '0')}`;
    
    return (
        <div className={`pb-2 ${styles.container}`} >
            <div className='text-white  pl-2 lg:pl-0 pt-1 lg:pt-0 pb-1 lg:uppercase bg-blue-800 lg:bg-inherit font-medium lg:text-blue-600 border-b border-gray-300' >
                {postData.topic}
            </div>
            <h1 className='text-3xl font-semibold my-2.5' >{postData.title}</h1>
            <div className='md:grid grid-cols-7 gap-7' >
                <div className='col-span-5' >
                    {/* <h1 className='text-3xl font-semibold' >{postData.title}</h1> */}
                    <div className='flex flex-col md:flex-row md:items-center justify-between' >
                        <div className="flex  divide-x divide-gray-300" >
                            <div className='flex items-center pl-2 md:pl-0 flex-wrap' >
                                <span className='text-orange-600  text-sm font-semibold' >{postData.author}</span>
                                <span className='text-gray-400 mx-2 text-xs' >{postData.time}</span>
                            </div>
                            <div className='hidden lg:block'>
                                <a className=" px-2 text-orange-500 text-sm hover:text-blue-700" rel="nofollow" target="_blank"
                                    href="https://news.google.com/publications/CAAiEIsIaHrsf0_N28UIHc69_W8qFAgKIhCLCGh67H9PzdvFCB3Ovf1v?oc=3&ceid=VN:vi">
                                    Theo d??i TGVN tr??n
                                    <span className="align-middle ml-1" >
                                        <Image src="/post/ico-google-new.png" width={90} height={20} />
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* fb,zalo,twitter button */}
                        <div className='flex' >
                            <span className='w-36 h-5' >
                                <iframe name="f1961bcc5150b78"
                                    data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin"
                                    frameBorder="0" allowtransparency="true" allowFullScreen={true} scrolling="no"
                                    allow="encrypted-media"
                                    src="https://www.facebook.com/plugins/like.php?action=like&amp;app_id=277749645924281&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1ab2db88753d4%26domain%3Dbaoquocte.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fbaoquocte.vn%252Ff36043b9d84ed34%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fbaoquocte.vn%2Fhuawei-se-tham-gia-vao-linh-vuc-o-to-dien-168951.html&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;show_faces=false&amp;width=">
                                </iframe>
                            </span>
                            <div >
                                <iframe frameBorder="0" allowFullScreen={true} scrolling="no" width="70px" height="20px"
                                    src="https://sp.zalo.me/plugins/share?dev=null&amp;color=blue&amp;oaid=579745863508352884&amp;href=https%3A%2F%2Fbaoquocte.vn%2Fhuawei-se-tham-gia-vao-linh-vuc-o-to-dien-168951.html&amp;layout=1&amp;customize=false&amp;callback=null&amp;id=7cb75813-fa0e-4c47-b4c8-1f4744ee1384&amp;domain=baoquocte.vn&amp;android=false&amp;ios=false">
                                </iframe>
                            </div>
                            <div className="twitter-share lt mx-1.5">
                                <iframe id="twitter-widget-0" scrolling="no" frameBorder="0"
                                    allowtransparency="true" allowFullScreen={true}
                                    className="twitter-share-button twitter-share-button-rendered twitter-tweet-button"
                                    style={{ position: "static", visibility: "visible", width: "73px", height: "20px" }}
                                    title="Twitter Tweet Button"
                                    src="https://platform.twitter.com/widgets/tweet_button.21f942bb866c2823339b839747a0c50c.vi.html#dnt=false&amp;id=twitter-widget-0&amp;lang=vi&amp;original_referer=https%3A%2F%2Fbaoquocte.vn%2Fhuawei-se-tham-gia-vao-linh-vuc-o-to-dien-168951.html&amp;size=m&amp;text=Huawei%20s%E1%BA%BD%20tham%20gia%20v%C3%A0o%20l%C4%A9nh%20v%E1%BB%B1c%20%C3%B4%20t%C3%B4%20%C4%91i%E1%BB%87n&amp;time=1640491861369&amp;type=share&amp;url=https%3A%2F%2Fbaoquocte.vn%2Fhuawei-se-tham-gia-vao-linh-vuc-o-to-dien-168951.html"></iframe>
                            </div>
                            <PrintIcon fontSize='8px' className='bg-gray-300 inline p-0.5 w-6 h-5  cursor-pointer' />
                        </div>
                    </div>
                    <div className='font-semibold my-4 leading-5' >{postData.heading}</div>
                    <ul className='py-2.5 pl-5 md:pl-7 border-b border-t border-gray-200 text-sm font-semibold list-disc text-orange-400'>
                        <li>
                            <Link href="/post/cuoc-choi-5g-o-canada-khong-con-danh-cho-huawei-cua-trung-quoc">
                                <a className='text-black hover:text-blue-600' >Cu???c ch??i 5G ??? Canada kh??ng c??n d??nh cho Huawei c???a Trung Qu???c?</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/post/quoc-hoi-my-cong-bo-be-boi-nha-cung-ung-cho-huawei-va-smic-cua-trung-quoc" >
                                <a className='text-black hover:text-blue-600' >Qu???c h???i M??? c??ng b??? b?? b???i nh?? cung ???ng cho Huawei v?? SMIC c???a Trung Qu???c</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/post/su-tro-ve-cua-cong-chua-huawei-manh-van-chu" >
                                <a className='text-black hover:text-blue-600' >S??? tr??? v??? c???a 'C??ng ch??a Huawei' M???nh V??n Chu</a>
                            </Link>
                        </li>
                    </ul>
                    <div className='mt-9' >
                        {postData.body.map((item,index) =>
                            <React.Fragment key={index}>
                                <div className=' bg-gray-100 mb-2 ' >
                                    <Image src={item.img} width={800} height={533} ></Image>
                                    <div className='w-full bg-gray-100 pl-3 pb-2 text-sm italic text-gray-600' >{item.imgText}</div>
                                </div>
                                {item.content.map((text,i) =>
                                    <React.Fragment key={i}>
                                        <p className='my-3 text-gray-800' >{text}</p>
                                    </React.Fragment>)}
                            </React.Fragment>)}
                    </div>
                    <div className='mb-4 divide-y divide-gray-200 border-b-4 border-t-4 border-orange-500' >
                        <Card img="/post/trung-quoc-canh-bao.png"
                            imgSize={{ w: 160, h: 90 }}
                            title="Trung Qu???c c???nh b??o: N???u Huawei b??? ch???n tham gia m???ng 5G, Canada s??? ph???i tr??? gi??"
                            content="Ng??y 10/12, ?????i s??? Trung Qu???c t???i Ottawa T??ng B???i V?? c???nh b??o, Canada s??? ph???i tr??? gi?? n???u ng??n ch???n t???p ??o??n vi???n th??ng ..."
                            styleLayout="flex flex-row"
                        />
                        <Card img="/post/cuu-thu-tuong-australia.png"
                            imgSize={{ w: 160, h: 90 }}
                            title="C???u Th??? t?????ng Australia: Canada n??n 't??? v???n' v?? Huawei"
                            content="C???u Th??? t?????ng Australia Malcolm Turnbull cho r???ng ch??nh ph??? Canada n??n c??n nh???c k??? vi???c ????? Huawei x??y d???ng c?? s??? h??? t???ng cho ..."
                            styleLayout="flex flex-row"
                        />
                    </div>
                    <CovidNews />
                    <div className="mt-14 mb-4 font-sans text-right italic"> (theo CNBC)</div>
                    <div className="flex flex-wrap mb-6">
                        <span className="hidden lg:inline font-bold bg-contain bg-no-repeat bg-left pl-6 mr-2 "
                            style={{ backgroundImage: `url(/post/ico-tag.png)`, backgroundSize: "20px" }} >
                            Tags:
                        </span>
                        <div className="flex flex-wrap">
                            <a className="hover:text-blue-700 bg-gray-200 p-0.5 rounded-sm px-1.5 m-1 text-xs" href="/topic/huawei">Huawei</a>
                            <a className="hover:text-blue-700 bg-gray-200 p-0.5 rounded-sm px-1.5 m-1 text-xs" href="/topic/huawei-trong-linh-vuc-oto">Huawei trong l??nh v???c ?? t??</a>
                            <a className="hover:text-blue-700 bg-gray-200 p-0.5 rounded-sm px-1.5 m-1 text-xs" href="/topic/oto-trung-quoc">xe ?? t?? ??i???n Trung Qu???c</a>
                            <a className="hover:text-blue-700 bg-gray-200 p-0.5 rounded-sm px-1.5 m-1 text-xs" href="/topic/dt-thong-minh">??i???n tho???i th??ng minh</a>
                            <a className="hover:text-blue-700 text-bl ml-4 bg-contain bg-no-repeat text-red-500 my-1 text-sm underline pl-5 uppercase bg-left font-bold" href="/topic/trung-quoc"
                                style={{ backgroundImage: `url(/post/ico-place.png)`, backgroundSize: "14px" }}>
                                Trung Qu???c
                            </a>
                        </div>

                    </div>
                    <div className='flex overflow-hidden mb-16' >
                        <span className='w-36 h-5' >
                            <iframe name="f1961bcc5150b78"
                                data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin"
                                frameBorder="0" allowtransparency="true" allowFullScreen={true} scrolling="no"
                                allow="encrypted-media"
                                src="https://www.facebook.com/plugins/like.php?action=like&amp;app_id=277749645924281&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1ab2db88753d4%26domain%3Dbaoquocte.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fbaoquocte.vn%252Ff36043b9d84ed34%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fbaoquocte.vn%2Fhuawei-se-tham-gia-vao-linh-vuc-o-to-dien-168951.html&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;show_faces=false&amp;width=">
                            </iframe>
                        </span>
                        <div >
                            <iframe frameBorder="0" allowFullScreen={true} scrolling="no" width="70px" height="20px"
                                src="https://sp.zalo.me/plugins/share?dev=null&amp;color=blue&amp;oaid=579745863508352884&amp;href=https%3A%2F%2Fbaoquocte.vn%2Fhuawei-se-tham-gia-vao-linh-vuc-o-to-dien-168951.html&amp;layout=1&amp;customize=false&amp;callback=null&amp;id=7cb75813-fa0e-4c47-b4c8-1f4744ee1384&amp;domain=baoquocte.vn&amp;android=false&amp;ios=false">
                            </iframe>
                        </div>
                        <PrintIcon fontSize='8px' className='bg-gray-300 inline ml-2 p-0.5 w-6 h-5  cursor-pointer' />
                    </div>
                    <div className="mb-3 sm:mb-0 pb-4 sm:pb-0 bg-gray-200 sm:bg-inherit">
                        <span className="text-white sm:text-black pl-2 sm:pl-0 block sm:inline bg-gray-600 sm:bg-inherit text-lg font-semibold sm:border-b border-red-600 ">
                            ?? KI???N B???N ?????C 
                            <span className='hidden sm:inline' > /</span>
                        </span>
                        <div className='flex flex-col sm:flex-row ml-2 sm:ml-0' >
                            <div className="flex flex-col md:py-0 py-1 w-3/4 sm:w-1/2 mr-4">
                                <label htmlFor="email1" className=" text-gray-400 text-sm font-bold leading-tight tracking-normal mb-2" />
                                <input id="email1" className=" mr-3 text-gray-600  outline outline-1 focus:rounded-sm outline-gray-300 outline-radi focus:outline-blue-200 focus:outline-2  bg-white font-normal w-full h-8 flex items-center pl-3 text-sm "
                                    placeholder="H??? t??n" />
                            </div>
                            <div className="flex flex-col md:py-0 py-1 w-3/4 sm:w-1/2">
                                <label htmlFor="email1" className="text-gray-400 text-sm font-bold leading-tight tracking-normal mb-2" />
                                <input id="email1" className="text-gray-600  outline outline-1 focus:rounded-sm outline-gray-300 outline-radi focus:outline-blue-200 focus:outline-2  bg-white font-normal w-full h-8 flex items-center pl-3 text-sm "
                                    placeholder="Email" />
                            </div>
                        </div>
                        <div className='w-full' >
                            <textarea className=" w-11/12 sm:w-full ml-2  sm:ml-0 h-36 p-2.5 my-2.5 outline outline-1 focus:rounded-sm outline-gray-300 outline-radi focus:outline-blue-200 focus:outline-2 border-gray-200  "
                                name="__comment"
                                placeholder="Nh???p n???i dung b??nh lu???n, vui l??ng g?? ti???ng Vi???t c?? d???u.">
                                </textarea>
                        </div>
                        <div className='ml-2 text-sm sm:hidden italic text-gray-500' >* Vui l??ng g?? ti???ng Vi???t c?? d???u</div>
                        <div className='flex  sm:justify-end' >
                            <button className=" rounded-sm sm:rounded-none ml-2 sm:ml-0 bg-orange-600 sm:bg-blue-600 opacity-75 hover:opacity-100  px-2 py-1 text-white text-sm" name="__MB_ACTION_POST_COMMENT" data-type="user_comments"
                                type="button" role="button" aria-disabled="false">G???i b??nh lu???n
                            </button>
                        </div>
                    </div>

                </div>
                <div className='col-span-2' >
                    <div className='mb-3' >
                        <Link href={`/topic/xem-nhieu`} >
                            <a className="hover:text-blue-700 text-2xl border-b border-red-600 "
                            onClick={()=>setTopicState("CH??? ????? / Xem nhi???u")} >
                                Xem nhi???u
                            </a>
                        </Link>
                        <div className='divide-y divide-gray-200 ' >
                            {MultimediaNews.map((item, index) =>
                                <Card key={index} id={index + 1}
                                    img={item.img}
                                    imgSize={{ w: 110, h: 62 }}
                                    title={item.title}
                                    styleLayout="flex flex-row" />
                            )}
                        </div>
                    </div>
                    <div>
                        <Link href={`/topic/doc-them`} >
                            <a className="hover:text-blue-700 text-2xl border-b border-red-600 "
                            onClick={()=>setTopicState("CH??? ?????")}>
                                Ch??? ?????
                            </a>
                        </Link>
                        <div className='divide-y divide-gray-200 ' >
                            {topic.map((item, index) =>
                                <Card key={index}
                                    img={item.img}
                                    imgSize={{ w: 110, h: 62 }}
                                    title={item.name}
                                    styleLayout="flex flex-row" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:grid grid-cols-2 gap-7 mt-2.5' >
                <div>
                    <Link href={`/topic/doc-them`} >
                        <a className="hover:text-blue-700 text-lg font-semibold border-b border-red-600 "
                        onClick={()=>setTopicState("CH??? ????? / ?????c th??m")}>
                            ?????C TH??M
                        </a>
                    </Link>
                    <div className='divide-y divide-gray-200' >
                        {contentLeft.map((item, i) =>
                            i < 10 && <Card key={i} 
                                img={item.img}
                                imgSize={{ w: 220, h: 124 }}
                                title={item.title}
                                content={item.body}
                                styleLayout="flex flex-row" />)}
                    </div>
                </div>
                <div>
                    <TopicPost content={thoiSu} />
                    <TopicPost content={bienDong} />
                    <TopicPost content={theGioi} />
                </div>
            </div>
        </div>
    )
}