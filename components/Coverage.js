import Slider from "./Slider";
import Image from "next/image";
import BannerSlider from "./BannerSlider";

export default function Coverage() {
    return (
        <div className="grid grid-flow-col gap-3.5 pb-8 border-b border-gray-200">
            <Slider />
            <div className="w-72 float-right">
                <div className="mb-4">
                    <Image src="/Body/2728_icon-BT-Son-4.jpg" width={300} height={250} />
                </div>
                <div className="bg-gray-200 p-3.5 mb-5">
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
                            <a className="flex justify-between">
                                <div>
                                    <Image src="/Body/binh-luan.jpg" width={125} height={70} />
                                </div>
                                <h3 className="font-bold text-sm w-32">
                                    <a href="https://baoquocte.vn/tinh-hinh-syria-chap-nhan-thuc-te-164495.html"
                                        title="Tình hình Syria: Chấp nhận thực tế">
                                        Tình hình Syria: Chấp nhận thực tế
                                    </a>
                                </h3>
                            </a>
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
    )
}