import styles from '../styles/Home.module.css'
import Coverage from './Coverage'
import MainContent from './MainContent'
import Image from 'next/image'
import Multimedia from './Multimedia'
import CategoryLeft from './CategoryLeft'
import CategoryCenter from './CategoryCenter'
import CategoryRight from './CategoryRight'
export default function Body() {
    return (
        <div className={styles.container}>
            <Coverage />
            <MainContent />
            <div className="flex items-center p-4 bg-red-100 mb-4">
                <a className="bg-no-repeat pl-8 mr-12 font-bold" 
                style={{ backgroundImage: "url(/Body/ico-topic.png)" }} >
                    CHỦ ĐỀ
                </a>
                <a className="px-2 text-sm font-bold ">Khủng hoảng năng lượng</a>
                <span className="font-semibold">/</span>
                <a className="px-2 text-sm font-bold " >Biển Đông</a>
                <span className="font-semibold">/</span>
                <a className="px-2 text-sm font-bold " >Căng thẳng Nga-Ukraine</a>
                <span className="font-semibold">/</span>
                <a className="px-2 text-sm font-bold " >Ngoại giao vaccine</a>
                <span className="font-semibold">/</span>
                <a className="px-2 text-sm font-bold " >Chảo lửa Trung Đông</a>
            </div>
            <Multimedia/>
            <div className="grid grid-flow-col gap-4 mt-3">
                <CategoryLeft/>
                <CategoryCenter/>
                <CategoryRight/>
            </div>
        </div>
    )
}