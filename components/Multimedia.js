import Image from "next/image"
import { MultimediaNews } from "../Data/MultimediaNews"
export default function Multimedia() {

    return (
        <div className="p-3.5 bg-gray-100 text-sm">
            <div className="flex justify-between">
                <div>
                    <span className="text-2xl border-b border-red-600 ">Multimedia</span>
                    <a className="mx-2" href="https://baoquocte.vn/tin-anh">Ảnh</a>
                    <a className="mx-2" href="https://baoquocte.vn/infographic">Infographic</a><a href="https://baoquocte.vn/tin-video">Video</a>
                    <a className="mx-2" href="https://baoquocte.vn/emagazine">Emagazine</a>
                </div>
                <a className="pt-1" href="https://www.youtube.com/channel/UCdvDDQ9UG1uvwIRsfEwcCMg/featured" >
                    <span className="mx-2" >Theo dõi báo TG&VN trên</span>
                    <span>
                        <Image src="/Body/ico-autobike-youtube.png" width={45} height={18} />
                    </span>
                </a>
            </div>
            <div className="flex flex-wrap justify-between">
                {MultimediaNews.map((item, index) => {
                    return (
                        index === 0 ?
                            (
                                <article className="relative w-full h-64 bg-cover bg-center group  
                                                overflow-hidden shadow-lg hover:shadow-lg  transition duration-300 
                                                ease-in-out mb-4"
                                    style={{ backgroundImage: `url(${item.img})`, width: "540px" }}>
                                    <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                                    <div class="relative w-full h-full flex justify-center items-end ">
                                        <h3 class="p-3" style={{ background: "#0003" }}>
                                            <a class="text-white text-lg font-semibold" href="#">
                                                <span class="absolute inset-0"></span>
                                                {item.title}
                                            </a>
                                        </h3>
                                    </div>
                                </article>
                            )
                            : (
                                <article style={{ width: "264px" }}>
                                    <a href="">
                                        <div>
                                            <Image src={item.img} width={264} height={149} />
                                        </div>
                                        <div className="text-xs font-bold">
                                            {item.title}
                                        </div>
                                    </a>
                                </article>
                            )
                    )
                })}
            </div>
        </div>
    )
}