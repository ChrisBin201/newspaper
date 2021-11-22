import Image from "next/image"
import CardQuocTe from "./CardQuocTe"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

export default function MainContent() {

    return (
        <div className="grid grid-flow-col gap-4 pt-4">
            <LeftContent/>
            <RightContent/>
        </div>
    )
}