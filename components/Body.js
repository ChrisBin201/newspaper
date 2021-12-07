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
            <div className="hidden md:flex items-center text-center p-4 bg-red-100 mb-4">
                <a className="bg-no-repeat pl-8 md:w-32 lg:w-auto lg:mr-12 font-bold hover:text-blue-700" 
                    href="https://baoquocte.vn/chu-de"
                    style={{ backgroundImage: "url(/Body/ico-topic.png)" }} >
                    CHỦ ĐỀ
                </a>
                <a className="px-2 text-sm font-bold hover:text-blue-700 "
                    href="https://baoquocte.vn/chu-de/khung-hoang-nang-luong.topic" >
                    Khủng hoảng năng lượng
                </a>
                <span className="font-semibold">/</span>
                <a className="px-2 text-sm font-bold hover:text-blue-700 "
                    href="https://baoquocte.vn/chu-de/bien-dong.topic" >
                    Biển Đông
                </a>
                <span className="font-semibold">/</span>
                <a className="px-2 text-sm font-bold hover:text-blue-700 "
                    href="https://baoquocte.vn/chu-de/cang-thang-nga-ukraine.topic" >
                    Căng thẳng Nga-Ukraine
                </a>
                <span className="font-semibold">/</span>
                <a className="px-2 text-sm font-bold hover:text-blue-700 " 
                    href="https://baoquocte.vn/chu-de/ngoai-giao-vaccine.topic" >
                    Ngoại giao vaccine
                </a>
                <span className="font-semibold">/</span>
                <a className="px-2 text-sm font-bold hover:text-blue-700 " href="" >
                    Chảo lửa Trung Đông
                </a>
            </div>
            <Multimedia/>
            <div className="md:grid md:grid-cols-3 lg:grid-cols-7 gap-4 mt-3">
                <CategoryLeft/>
                <CategoryCenter/>
                <CategoryRight/>
            </div>
        </div>
    )
}