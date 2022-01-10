import CardQuocTe from "./CardQuocTe"
import Image from "next/image"
import Link from "next/link"
import { NewsContext } from "../Context/NewsContext"
import { useContext } from "react"
export default function QuocTeNews() {

    const { topicState, setTopicState } = useContext(NewsContext)

    return (
        <div className="mb-3">
            <div className="flex justify-between mb-2.5 items-center">
                <Link href="/topic/quoc-te-news" >
                    <a onClick={() =>setTopicState("CHỦ ĐỀ / Quốc tế TV")} >
                        <Image src="/Body/logo-tv.png" width={122} height={30} />
                    </a>
                </Link>
                <div>
                    <a className="mr-2 text-sm hover:text-blue-700" rel="nofollow" target="_blank"
                        href="https://www.youtube.com/user/sakkura89">
                        Theo dõi Quốc Tế TV trên
                        <span className="align-middle ml-1" >
                            <Image src="/Body/ico-autobike-youtube.png" width={45} height={18} />
                        </span>
                    </a>
                </div>
            </div>
            <div className="lg:grid grid-cols-3 lg:gap-x-8 " >
                <div className="mb-2 col-span-3" >
                    <div className="mb-2" >
                        <iframe id="youtubeplayer" video-id="1200"
                            width="100%" height="315"
                            src="https://www.youtube.com/embed/l3HREX0aYK8?rel=0&amp;version=3&amp;enablejsapi=1"
                            frameBorder="0" allowFullScreen="">
                        </iframe>
                    </div>
                    <Link href="/post/quoc-te-news-0" >
                        <a className="hover:text-blue-700 font-semibold sm:text-lg lg:text-base my-2">
                            Thủ tướng Chính phủ Phạm Minh Chính trả lời chất vấn trước Quốc hội
                        </a>
                    </Link>
                </div>
                {/* <div className="flex flex-col lg:flex-row justify-between"> */}
                    <CardQuocTe path="/Body/quoc-te-1.jpg"
                        content="Chính sách của EU về Biển Đông"  id={1}/>
                    <CardQuocTe path="/Body/quoc-te-2.jpg"
                        content="Những thông tin nổi bật về tình hình Biển Đông từ 1-7/11" id={2} />
                    <CardQuocTe path="/Body/quoc-te-3.jpg"
                        content="Những thông tin nổi bật về tình hình Biển Đông từ 25-31/10" id={3} />
                {/* </div> */}
            </div>
        </div>
    )
}