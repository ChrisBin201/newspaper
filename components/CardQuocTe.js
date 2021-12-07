import Image from "next/image";
export default function CardQuocTe({path, content}) {

    return (
        <div className="flex lg:flex-col lg:w-48">
            <div>
                <Image src={path} width={195} height={110} />
            </div>
            <div className=" pl-2 w-3/5 lg:p-0 lg:w-auto text-sm text-gray-600" >{content}</div>
        </div>

    )
}