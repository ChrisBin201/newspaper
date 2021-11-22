import Image from "next/image";
export default function CardQuocTe({path, content}) {

    return (
        <div style={{width:"195px"}}>
            <div>
                <Image src={path} width={195} height={110} />
            </div>
            <div>{content}</div>
        </div>

    )
}