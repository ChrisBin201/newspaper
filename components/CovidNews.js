import { covid } from "../Data/covidData"
export default function CovidNews(){
    const dayArr = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1;
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const date = `${day}/${month}/${year}`;

    const time = `${dateObj.getHours()}:${String(dateObj.getMinutes()).padStart(2, '0')}`;
    const dayOfWeek = dayArr[dateObj.getDay()];

    return(
        <div 
        // style={{ width: "615px" }}
                className="bg-gray-100 py-3.5 border border-solid border-gray-200 mb-4 divide-x divide-gray-200 flex flex-col lg:flex-row ">
                <div className="px-3">
                    <div className="pb-2 border-b border-gray-300" >
                        <span className="text-lg font-bold" >Số ca Covid-19 tại Việt Nam</span>
                        <div className="text-xs" >
                            Cập nhật: {`${day}/${month}/${year} ${time}`} | Nguồn: Bộ Y Tế
                        </div>
                    </div>
                    <div className="flex justify-around pt-2.5 mb-3 lg:mb-0" >
                        <div className="mr-2" >
                            <div className="text-sm text-gray-500" >Hôm nay</div>
                            <span className="text-4xl font-semibold text-red-600" >+11,126</span>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500" >Tổng</div>
                            <span className="text-4xl font-semibold" >1,143,967</span>
                        </div>
                    </div>
                </div>
                <div className="px-3 w-full" >
                    <a style={{ backgroundImage: "url('	https://baoquocte.vn/modules/frontend/themes/thegioivietnam/images/pc/ico-topic-covid.svg')" }}
                        className=" bg-no-repeat pl-6 underline text-sm text-blue-700"
                        href="https://baoquocte.vn/chu-de/covid-19.topic" >
                        Tin Covid-19 mới nhất
                    </a>
                    <div className="mt-2.5 lg:mt-0" >
                        <table className="text-left ">
                            <thead>
                                <tr className="text-sm text-gray-600" >
                                    <th className="font-normal" width="50%">Tỉnh</th>
                                    <th className="font-normal" width="25%">Hôm nay</th>
                                    <th className="font-normal" width="25%">Tổng số ca</th>
                                </tr>
                            </thead>
                        </table>
                        <div className="overflow-y-scroll h-20" >
                            <table className="text-left w-full ">
                                <tbody className="" >
                                    {covid.map((item, index) => {
                                        const { city, today, total } = item
                                        return (
                                            <tr key={index} className="text-sm">
                                                <td className="py-1" width="50%">{city}</td>
                                                <td className="py-1 text-red-600" width="25%">{today}</td>
                                                <td className="py-1" width="25%">{total}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    )
}