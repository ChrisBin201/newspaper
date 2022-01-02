import Image from "next/image"
import CardQuocTe from "./CardQuocTe"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

export default function MainContent() {

    return (
        <div className="md:grid grid-cols-12 gap-4 pt-1 md:pt-4">
            <LeftContent/>
            <RightContent/>
        </div>
    )
}