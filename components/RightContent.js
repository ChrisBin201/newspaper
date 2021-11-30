import Image from "next/image"
import BoNgoaiGiaoNews from "./BoNgoaiGiaoNews"
import CardQuocTe from "./CardQuocTe"
import CovidNews from "./CovidNews"
import GoldNews from "./GoldNews"
import News from "./News"
import QuocTeNews from "./QuocTeNews"

export default function RightContent() {

    return (
        <div style={{ width: "615px" }}>
            <CovidNews/>
            <QuocTeNews/>
            <div className="grid grid-flow-col gap-3">
                <div>
                    <News />
                    <BoNgoaiGiaoNews />
                </div>
                <div style={{ width: "300px" }}>
                    <GoldNews/>
                    <div>
                        <Image src="/Body/banner-right-1.jpg" width={300} height={250} />
                    </div>
                    <div>
                        <Image src="/Body/banner-right-2.jpg" width={300} height={203} />
                    </div>
                    <div>
                        <Image src="/Body/banner-right-3.jpg" width={300} height={203} />
                    </div>
                    <div>
                        <Image src="/Body/banner-right-4.jpg" width={300} height={203} />
                    </div>
                </div>
            </div>
        </div>
    )
}