import Image from "next/image"
import BoNgoaiGiaoNews from "./BoNgoaiGiaoNews"
import CardQuocTe from "./CardQuocTe"
import CovidNews from "./CovidNews"
import GoldNews from "./GoldNews"
import News from "./News"
import QuocTeNews from "./QuocTeNews"

export default function RightContent() {

    return (
        <div className="col-span-7"
        // style={{ width: "615px" }}
        >
            <CovidNews/>
            <QuocTeNews/>
            <div className="lg:grid grid-cols-4 gap-3">
                <div className="col-span-2">
                    <News />
                    <BoNgoaiGiaoNews />
                </div>
                <div 
                    className="col-span-2"
                // style={{ width: "300px" }}
                >
                    <GoldNews/>
                    <div className="hidden lg:block">
                        <div >
                            <Image src="/Body/banner-right-1.jpg" width={320} height={250}  />
                        </div>
                        <div>
                            <Image src="/Body/banner-right-2.jpg" width={320} height={203} />
                        </div>
                        <div>
                            <Image src="/Body/banner-right-3.jpg" width={320} height={203} />
                        </div>
                        <div>
                            <Image src="/Body/banner-right-4.jpg" width={320} height={203} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}