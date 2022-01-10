import Slider from "./Slider";
import Image from "next/image";
import BannerSlider from "./BannerSlider";
import SliderMobile from "./SliderMobile";
import Link from "next/link";
import { content } from "../Data/sliderContent";
import { NewsContext } from "../Context/NewsContext";
import { useContext } from "react";
export default function Coverage() {

    const { topicState, setTopicState } = useContext(NewsContext)

    return (
        <div className=" pb-2 md:pb-8 border-b border-gray-200">
            <div className="md:grid grid-cols-4 gap-3.5" >
                <Slider />
                <SliderMobile content={content} />
                <div className="h-full flex flex-col justify-between bg-gray-300 md:bg-transparent">
                    <Link href="/topic/bo-truong-bo-ngoai-giao-bui-thanh-son" >
                        <a  className="m-auto md:m-0 flex" 
                            onClick={()=>setTopicState("CHỦ ĐỀ / Bộ trưởng Bộ Ngoại giao Bùi Thanh Sơn")} >
                            <Image src="/Body/2728_icon-BT-Son-4.jpg" width={300} height={250} />
                        </a>
                    </Link>
                    <div className="bg-gray-200 p-3.5">
                        <div>
                            <h2>
                                <Link href="/topic/binh-luan" >
                                    <a  className="border-red-600 border-b font-bold hover:text-blue-700 "
                                        onClick={()=>setTopicState("CHỦ ĐỀ / Bình luận")} >
                                        BÌNH LUẬN
                                    </a>
                                </Link>
                            </h2>
                        </div>
                        <div className="text-sm">
                            <article className="pt-3">
                                <div className="flex md:flex-col lg:flex-row md:justify-between">
                                    <Link href="/post/tinh-hinh-syria-chap-nhan-thuc-te" >
                                        <a className="md:m-auto" >
                                            <Image src="/Body/binh-luan.jpg" width={125} height={70} />
                                        </a>
                                    </Link>
                                    <Link href="/post/tinh-hinh-syria-chap-nhan-thuc-te" >
                                        <a
                                            className="font-bold hover:text-blue-700 text-sm lg:w-32 md:text-center lg:text-left ml-2 md:ml-0 lg:ml-2"
                                            title="Tình hình Syria: Chấp nhận thực tế">
                                            Tình hình Syria: Chấp nhận thực tế
                                        </a>
                                    </Link>
                                </div>
                            </article>
                            <article className="pt-2.5 hover:text-blue-700 ">
                                <Link href="/post/goi-chi-tieu-1200-ty-usd-cua-my-de-diu-au-lo" >
                                    <a 
                                        title="Gói chi tiêu 1.200 tỷ USD của Mỹ: Để dịu âu lo">
                                        Gói chi tiêu 1.200 tỷ USD của Mỹ: Để dịu âu lo
                                    </a>
                                </Link>
                            </article>
                            <article className="pt-2.5 hover:text-blue-700 ">
                                <Link href="/post/thoa-thuan-thuong-mai-my-eu-dong-minh-gian-tiep" >
                                    <a
                                        title="Thoả thuận thương mại Mỹ-EU: Đồng minh gián tiếp">
                                        Thoả thuận thương mại Mỹ-EU: Đồng minh gián tiếp
                                    </a>
                                </Link>
                            </article>
                        </div>
                    </div>
                    <BannerSlider />
                </div>
            </div>
        </div>
    )
}