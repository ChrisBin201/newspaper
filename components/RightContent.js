import Image from "next/image"
import BoNgoaiGiaoNews from "./BoNgoaiGiaoNews"
import CardQuocTe from "./CardQuocTe"
import News from "./News"

export default function RightContent(){

    return(
        <div style={{ width: "615px" }}>
                <div style={{ width: "615px", height: "166px" }}
                    className="bg-gray-100 p-3.5 border border-solid border-gray-200 mb-4 ">
                    <div></div>
                    <div></div>
                </div>
                <div className="mb-3">
                    <div className="flex justify-between mb-2.5">
                        <div>
                            <Image src="/Body/logo-tv.png" width={122} height={30}  />
                        </div>
                        <div>
                            <a className="mr-2 text-sm" rel="nofollow" target="_blank"
                                href="https://www.youtube.com/user/sakkura89">
                                Theo dõi Quốc Tế TV trên
                            </a>
                            <span>
                                <Image src="/Body/ico-autobike-youtube.png" width={45} height={18} />
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <iframe id="youtubeplayer" video-id="1200"
                                    width="100%" height="315"
                                    src="https://www.youtube.com/embed/l3HREX0aYK8?rel=0&amp;version=3&amp;enablejsapi=1"
                                    frameborder="0" allowfullscreen="">
                                </iframe>
                            </div>
                            <div className="font-semibold text-base my-2">
                                Thủ tướng Chính phủ Phạm Minh Chính trả lời chất vấn trước Quốc hội
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <CardQuocTe path="/Body/quoc-te-1.jpg"
                                content="Chính sách của EU về Biển Đông" />
                            <CardQuocTe path="/Body/quoc-te-2.jpg"
                                content="Những thông tin nổi bật về tình hình Biển Đông từ 1-7/11" />
                            <CardQuocTe path="/Body/quoc-te-3.jpg"
                                content="Những thông tin nổi bật về tình hình Biển Đông từ 25-31/10" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-flow-col gap-3">
                    <div>
                        <News/>
                        <BoNgoaiGiaoNews/>
                    </div>
                    <div style={{width:"300px"}}>
                        <div>
                            <Image src="/Body/banner-right-1.jpg" width={300} height={250} />
                        </div>
                        <div>
                            <Image src="/Body/banner-right-2.jpg" width={300} height={203}  />
                        </div>
                        <div>
                            <Image src="/Body/banner-right-3.jpg"  width={300} height={203} />
                        </div>
                        <div>
                            <Image src="/Body/banner-right-4.jpg"  width={300} height={203} />
                        </div>
                    </div>
                </div>
            </div>
    )
}