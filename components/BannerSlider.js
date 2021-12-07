import Image from "next/image"
import { useEffect, useState } from "react"

export default function BannerSlider() {
    const imgArr = ['/Body/banner-slider-1.jpg', '/Body/banner-slider-2.jpg',
        '/Body/banner-slider-3.jpg', '/Body/banner-slider-4.jpg']
    const [index,setIndex] = useState(0)

    let lastIndex = imgArr.length - 1;
    const Increase = () => {
        index === lastIndex ? setIndex(0) : setIndex(index + 1);

    }
    useEffect(() => {
        let slider = setInterval(Increase, 5000);
        // console.log(index)
        return () => {
            clearInterval(slider)
        };
    }, [index])
    return (
        // <div className="">
            <div className="hidden md:block relative mt-16" >
                {imgArr.map((img, i) => {
                    // console.log(index)
                    // console.log(i)
                    return (
                        <div className={`absolute transition-all duration-300 -bottom-1.5 
                                        ${i===index? "opacity-100":"opacity-0"}` }
                                        key={i}>
                            <Image src={img} width={300} height={90} />
                        </div>
                    )
                })}
            </div>
        // </div>
    )
}