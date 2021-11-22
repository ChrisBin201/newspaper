import Image from "next/image"

export default function BannerSlider(){

    return(
        <div className="relative">
            <div className="absolute">
                <Image src="/Body/banner-slider-1.jpg" width={300} height={90} />
            </div>
            <div className="absolute">
                <Image src="/Body/banner-slider-2.jpg" width={300} height={90} />
            </div>
            <div className="absolute">
                <Image src="/Body/banner-slider-3.jpg" width={300} height={90} />
            </div>
            <div className="absolute">
                <Image src="/Body/banner-slider-4.jpg" width={300} height={90} />
            </div>
        </div>
    )
}