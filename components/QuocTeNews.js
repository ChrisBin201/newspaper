import CardQuocTe from "./CardQuocTe"
import Image from "next/image"
export default function QuocTeNews(){
    
    return(
        <div className="mb-3">
                <div className="flex justify-between mb-2.5">
                    <div>
                        <Image src="/Body/logo-tv.png" width={122} height={30} />
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
                    <div className="mb-2" >
                        <div className="mb-2" >
                            <iframe id="youtubeplayer" video-id="1200"
                                width="100%" height="315"
                                src="https://www.youtube.com/embed/l3HREX0aYK8?rel=0&amp;version=3&amp;enablejsapi=1"
                                frameBorder="0" allowFullScreen="">
                            </iframe>
                        </div>
                        <a href="" className="hover:text-blue-700 font-semibold text-base my-2">
                            Thủ tướng Chính phủ Phạm Minh Chính trả lời chất vấn trước Quốc hội
                        </a>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <CardQuocTe path="/Body/quoc-te-1.jpg"
                            content="Chính sách của EU về Biển Đông" />
                        <CardQuocTe path="/Body/quoc-te-2.jpg"
                            content="Những thông tin nổi bật về tình hình Biển Đông từ 1-7/11" />
                        <CardQuocTe path="/Body/quoc-te-3.jpg"
                            content="Những thông tin nổi bật về tình hình Biển Đông từ 25-31/10" />
                    </div>
                </div>
            </div>
    )
}