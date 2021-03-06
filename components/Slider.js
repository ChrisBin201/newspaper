import { content } from "../Data/sliderContent";
import Image from "next/image";
import { useEffect, useState } from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styles from '../styles/Home.module.css'
import Link from "next/link";
export default function Slider() {
    const [contentSlide] = useState(content);
    const [index, setIndex] = useState(0);

    let lastIndex = contentSlide.length - 1;
    const Increase = () => {
        index === lastIndex ? setIndex(0) : setIndex(index + 1);

    }
    const Decrease = () => {
        index === 0 ? setIndex(lastIndex) : setIndex(index - 1);
    }

    useEffect(() => {
        let slider = setInterval(Increase, 5000);
        return () => {
            clearInterval(slider)
        };
    }, [index])
    return (
        <div 
        className={`hidden md:block col-span-3 ${styles.slider}`}>
            <div 
            // style={{height: "606px" }}
                className="flex relative w-full h-full  overflow-hidden transition-all duration-500">
                {
                    content.map((item, i) => {

                        let class_name = "nextSlide";
                        if (i === index)
                            class_name = "activeSlide";
                        if (i + 1 === index || (i === contentSlide.length - 1 && index === 0))
                            class_name = "lastSlide";
                        
                        let prev,active,next;
                        if(index===0){ 
                            prev=contentSlide.length - 1; active = index; next = index+1
                        }
                        else if(index===contentSlide.length - 1){
                            prev=index-1; active = index; next = 0
                        }
                        else{
                            prev=index-1; active = index; next = index+1
                        }
                        return (
                            (i===prev || i===active || i===next) &&
                            <article key={i}
                            className={"absolute w-full h-full transition-all duration-500 bg-gray-100 " + class_name} >
                                <Link href={`/post/${item.title}`} >
                                    <a>
                                        <div className={`relative w-full ${styles.imgSlider}`} >
                                            <Image src={item.img}
                                            layout="fill"
                                            // width={815}
                                            // height={458}
                                            />
                                        </div>
                                        <div className="bg-gray-100 w-full">
                                            <h2 className=" md:py-5 lg:py-0 md:text-xl lg:text-2xl font-bold mb-2 px-3.5">{item.title}</h2>
                                            <div className="hidden lg:block mb-2.5 px-3.5">{item.body}</div>
                                        </div>
                                    </a>
                                </Link>
                            </article>
                        )
                    })
                }
                <div className="absolute bottom-40 left-3 flex">
                    <button className="w-5 h-5 bg-gray-500 z-10  flex justify-center items-center mr-1 border border-black "
                            onClick={Decrease} >
                        <ArrowLeftIcon htmlColor="white" />
                    </button>
                    <button className="w-5 h-5 bg-gray-500 z-10 flex justify-center items-center border border-black "  
                            onClick={Increase} >
                        <ArrowRightIcon htmlColor="white"   />
                    </button>
                </div>

            </div>
        </div>
    )
}