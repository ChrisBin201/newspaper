import Image from "next/image"
import { photoNews } from "../Data/photoNews"

export default function ImageNews() {

    return (
        <div className="flex flex-wrap justify-between pb-3 mb-3 border-b border-gray-200">
            <div className="font-semibold text-2xl mb-3" >Tin ảnh</div>
            {photoNews.map((element, i) => {
                return (
                    // <div >
                    i === 0 ? (
                        <article key={i} className="relative w-full h-64 bg-cover bg-center group  
                                                overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 
                                                ease-in-out mb-4"
                            style={{ backgroundImage: `url(${element.img})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-end">
                                <h3 className="p-2">
                                    <a className="text-white text-lg font-semibold" href="#">
                                        <span className="absolute inset-0"></span>
                                        {element.title}
                                        <span>
                                            <Image src="/Body/img-images.png" width={15} height={12} />
                                        </span>
                                    </a>
                                </h3>
                            </div>
                        </article>
                    )
                        :
                        (<article key={i} style={{ width: "146px" }}>
                            <div>
                                <Image src={element.img} width={146} height={82} />
                            </div>
                            <div className="text-xs font-bold">
                                {element.title}
                                <span>
                                    <Image src="/Body/img-images.png" width={15} height={12} />
                                </span>
                            </div>

                        </article>)

                    // </div>
                )
            })}
        </div>
    )
}