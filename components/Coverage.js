import Slider from "./Slider";
import Image from "next/image";
import BannerSlider from "./BannerSlider";
import SliderMobile from "./SliderMobile";

export default function Coverage() {
    return (
        <div className=" pb-8 border-b border-gray-200">
            <div className="md:grid grid-cols-4 gap-3.5" >
                <Slider />
                <SliderMobile/>
                <div className="h-full flex flex-col justify-between bg-gray-300 md:bg-transparent">
                    <div className="m-auto md:m-0 flex">
                        <Image src="/Body/2728_icon-BT-Son-4.jpg" width={300} height={250} />
                    </div>
                    <div className="bg-gray-200 p-3.5">
                        <div>
                            <h2>
                                <a className="border-red-600 border-b font-bold"
                                    href="https://baoquocte.vn/the-gioi/binh-luan">
                                    BÌNH LUẬN
                                </a>
                            </h2>
                        </div>
                        <div className="text-sm">
                            <article className="pt-3">
                                <div className="flex md:flex-col lg:flex-row md:justify-between">
                                    <div>
                                        <Image src="/Body/binh-luan.jpg" width={125} height={70} />
                                    </div>
                                        <a href="https://baoquocte.vn/tinh-hinh-syria-chap-nhan-thuc-te-164495.html"
                                            className="font-bold text-sm md:w-32 pl-2 md:pl-0"
                                            title="Tình hình Syria: Chấp nhận thực tế">
                                            Tình hình Syria: Chấp nhận thực tế
                                        </a>
                                </div>
                            </article>
                            <article className="pt-2.5">
                                <a href="https://baoquocte.vn/goi-chi-tieu-1200-ty-usd-cua-my-de-diu-au-lo-164358.html"
                                    title="Gói chi tiêu 1.200 tỷ USD của Mỹ: Để dịu âu lo">
                                    Gói chi tiêu 1.200 tỷ USD của Mỹ: Để dịu âu lo
                                </a>
                            </article>
                            <article className="pt-2.5">
                                <a href="https://baoquocte.vn/thoa-thuan-thuong-mai-my-eu-dong-minh-gian-tiep-163768.html"
                                    title="Thoả thuận thương mại Mỹ-EU: Đồng minh gián tiếp">
                                    Thoả thuận thương mại Mỹ-EU: Đồng minh gián tiếp
                                </a>
                            </article>
                        </div>
                    </div>
                    <BannerSlider />
                </div>
            </div>
        </div>
    )
}