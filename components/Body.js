import styles from '../styles/Home.module.css'
import Coverage from './Coverage'
import MainContent from './MainContent'
import Image from 'next/image'
import Multimedia from './Multimedia'
import CategoryLeft from './CategoryLeft'
import CategoryCenter from './CategoryCenter'
import CategoryRight from './CategoryRight'
import Link from 'next/link'
import { NewsContext } from '../Context/NewsContext'
import { useContext } from 'react'
export default function Body() {

    const { topicState, setTopicState } = useContext(NewsContext)

    return (
        <div className={styles.container}>
            <Coverage />
            <MainContent />
            <div className="hidden md:flex items-center text-center p-4 bg-red-100 mb-4">
                <Link href="/topic/chu-de" >
                    <a className="bg-no-repeat pl-8 md:w-32 lg:w-auto lg:mr-12 font-bold hover:text-blue-700"
                        style={{ backgroundImage: "url(/Body/ico-topic.png)" }}
                        onClick={()=>setTopicState("CHỦ ĐỀ")} >
                        CHỦ ĐỀ
                    </a>
                </Link>
                <Link href="/topic/khung-hoang-nang-luong" >
                    <a  className="px-2 text-sm font-bold hover:text-blue-700 "
                        onClick={()=>setTopicState("CHỦ ĐỀ / Khủng hoảng năng lượng")} >
                        Khủng hoảng năng lượng
                    </a>
                </Link>
                <span className="font-semibold">/</span>
                <Link href="/topic/bien-dong" >
                    <a className="px-2 text-sm font-bold hover:text-blue-700 "
                    onClick={()=>setTopicState("CHỦ ĐỀ / Biển Đông")} 
                    >
                        Biển Đông
                    </a>
                </Link>
                <span className="font-semibold">/</span>
                <Link href="/topic/cang-thang-nga-ukraine" >
                    <a className="px-2 text-sm font-bold hover:text-blue-700 "
                    onClick={()=>setTopicState("CHỦ ĐỀ / Căng thẳng Nga-Ukraine")} 
                    >
                        Căng thẳng Nga-Ukraine
                    </a>
                </Link>
                <span className="font-semibold">/</span>
                <Link href="/topic/ngoai-giao-vaccine" >
                    <a className="px-2 text-sm font-bold hover:text-blue-700 "
                    onClick={()=>setTopicState("CHỦ ĐỀ / Ngoại giao vaccine")} 
                    >
                        Ngoại giao vaccine
                    </a>
                </Link>
                <span className="font-semibold">/</span>
                <Link href="/topic/chao-lua-trung-dong" >
                    <a  className="px-2 text-sm font-bold hover:text-blue-700 "
                        onClick={()=>setTopicState("CHỦ ĐỀ / Chảo lửa Trung Đông")}  >
                        Chảo lửa Trung Đông
                    </a>
                </Link>
            </div>
            <Multimedia />
            <div className="md:grid md:grid-cols-3 lg:grid-cols-7 gap-4 mt-3">
                <CategoryLeft />
                <CategoryCenter />
                <CategoryRight />
            </div>
        </div>
    )
}