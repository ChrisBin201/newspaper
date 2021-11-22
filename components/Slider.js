import { content } from "../Data/sliderContent";
import Image from "next/image";
import { useEffect, useState } from "react";
import {Button} from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export default function Slider(){
    const [contentSlide] = useState(content);
    const [index, setIndex] = useState(0); 

    let lastIndex = contentSlide.length -1 ;
    const Increase = () => {
        index === lastIndex ? setIndex(0) : setIndex(index+1);

    }
    const Decrease = () => {
        index === 0 ? setIndex(lastIndex) : setIndex(index-1); 
    }

    useEffect(()=>{
        let slider = setInterval(Increase, 5000);
        return () => {
            clearInterval(slider)
        };
    },[index])   
    // console.log(clients);
    return(
        <div className="block float-left">
            <div style={{width:"815px",height:"606px"}}  
                className="flex relative overflow-hidden transition-all duration-500">
            {
                content.map((item,i)=>{

                    let class_name = "nextSlide";
                    if(i === index) 
                        class_name = "activeSlide";
                    if(i + 1 === index|| (i === contentSlide.length -1 && index === 0) ) 
                        class_name= "lastSlide";

                    return(
                        <article className={"absolute w-full h-full transition-all duration-500 opacity-0 bg-gray-100 " +class_name} >
                            <Image src={item.img} width={815} height={458} />
                            <div className="bg-gray-100 h-full">
                                <h2 className="text-2xl font-bold mb-2 px-3.5">{item.title}</h2>
                                <div className="mb-2.5 px-3.5">{item.body}</div>
                            </div>
                        </article>
                    )
                })
            }

            </div>
        </div>
    )
}