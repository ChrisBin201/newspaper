import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
export const NewsContext = createContext();
export default function AppProvider({children}){
    
    const [topicState,setTopicState] = useState("")
    const router = useRouter();
    // console.log(router)
    useEffect(() =>{
        if(router.pathname.includes("/post/[pid]"))
            setTopicState("")
    },[router.pathname])
        // setTopicState("")
    
    return(
        <NewsContext.Provider value={{topicState, setTopicState, router }} >
            {children}
        </NewsContext.Provider>
    )
}