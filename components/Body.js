import styles from '../styles/Home.module.css'
import Coverage from './Coverage'
import MainContent from './MainContent'
import Image from 'next/image'
import Multimedia from './Multimedia'
import CategoryLeft from './CategoryLeft'
import CategoryCenter from './CategoryCenter'
import CategoryRight from './CategoryRight'
import Link from 'next/link'
export default function Body() {
    return (
        <div className={styles.container}>
            <Coverage />
            <MainContent />
            <div className="hidden md:flex items-center text-center p-4 bg-red-100 mb-4">
                <Link href="/topic/chu-de" >
                    <a className="bg-no-repeat pl-8 md:w-32 lg:w-auto lg:mr-12 font-bold hover:text-blue-700"
                        style={{ backgroundImage: "url(/Body/ico-topic.png)" }} >
                        CHỦ ĐỀ
                    </a>
                </Link>
                <Link href="/topic/khung-hoang-nang-luong" >
                    <a className="px-2 text-sm font-bold hover:text-blue-700 "
                    >
                        Khủng hoảng năng lượng
                    </a>
                </Link>
                <span className="font-semibold">/</span>
                <Link href="/topic/bien-dong" >
                    <a className="px-2 text-sm font-bold hover:text-blue-700 "
                    >
                        Biển Đông
                    </a>
                </Link>
                <span className="font-semibold">/</span>
                <Link href="/topic/cang-thang-nga-ukraine" >
                    <a className="px-2 text-sm font-bold hover:text-blue-700 "
                    >
                        Căng thẳng Nga-Ukraine
                    </a>
                </Link>
                <span className="font-semibold">/</span>
                <Link href="/topic/ngoai-giao-vaccine" >
                    <a className="px-2 text-sm font-bold hover:text-blue-700 "
                    >
                        Ngoại giao vaccine
                    </a>
                </Link>
                <span className="font-semibold">/</span>
                <Link href="/topic/chao-lua-trung-dong" >
                    <a className="px-2 text-sm font-bold hover:text-blue-700 " >
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