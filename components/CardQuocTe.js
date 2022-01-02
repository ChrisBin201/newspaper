import Image from "next/image";
import Link from "next/link";
export default function CardQuocTe({ path, content,id }) {

    return (
        <div className="flex lg:flex-col">
            <Link href={`/post/quoc-te-news-${id}`}>
                <a >
                    <Image src={path} width={195} height={110} />
                </a>
            </Link>
            <Link href={`/post/quoc-te-news-${id}`} >
                <a className="hover:text-blue-700 pl-2 w-3/5 lg:p-0 lg:w-auto  sm:text-lg lg:text-sm text-gray-600" >
                    {content}
                </a>
            </Link>
        </div>

    )
}