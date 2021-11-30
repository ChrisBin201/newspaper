import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { goldPrice } from "../Data/goldPrice"
import React, { useState } from 'react';
export default function GoldNews() {
    //Cấu hình lại data goldPrice
    let set = new Set();
    goldPrice.forEach((item) => {
        set.add(item.type)
    })
    let listGold = []
    for (let typeGold of set) {
        let listTypeGold = goldPrice.filter((item) => item.type === typeGold)
        listGold.push({
            type: typeGold,
            list: listTypeGold
        })
    }
    // console.log(listGold)
    // create date và time
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1;
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const date = `${day}/${month}/${year}`;
    const time = `${dateObj.getHours()}:${String(dateObj.getMinutes()).padStart(2, '0')}`;

    //slider cho bảng giá vàng
    const [contentSlide] = useState(listGold);
    const [index, setIndex] = useState(0);

    let lastIndex = contentSlide.length - 1;
    const Increase = () => {
        index === lastIndex ? setIndex(0) : setIndex(index + 1);

    }
    const Decrease = () => {
        index === 0 ? setIndex(lastIndex) : setIndex(index - 1);
    }
    return (
        <div className="mb-2" >
            <div className="flex justify-between">
                <span className="text-2xl border-b border-red-600 mb-3.5">Giá Vàng</span>
                <div className="flex" >
                    <button className="w-7 h-7 bg-gray-200 flex justify-center items-center rounded-sm mr-2  "
                            onClick={Decrease} >
                        <ArrowBackIosNewIcon fontSize="small" />
                    </button>
                    <button className="w-7 h-7 bg-gray-200 flex justify-center items-center rounded-sm  "
                            onClick={Increase} >
                        <ArrowForwardIosIcon fontSize="small" />
                    </button>
                </div>
            </div>
            <div
                style={{ height: "220px" }}
                className="flex relative overflow-x-hidden ">
                {listGold.map((golds, i) => {

                    let class_name = "nextSlide";
                    if (i === index)
                        class_name = "activeSlide";
                    if (i + 1 === index || (i === contentSlide.length - 1 && index === 0))
                        class_name = "lastSlide";

                    let prev, active, next;
                    if (index === 0) {
                        prev = contentSlide.length - 1; active = index; next = index + 1
                    }
                    else if (index === contentSlide.length - 1) {
                        prev = index - 1; active = index; next = 0
                    }
                    else {
                        prev = index - 1; active = index; next = index + 1
                    }

                    return (
                        (i===prev || i===active || i===next) &&
                        <div key={i} className={`absolute transition-all duration-300  ${class_name}`}>
                            <table className="w-full table-fixed border-collapse ">
                                <thead>
                                    <tr className="bg-blue-900 text-sm" >
                                        <th className="border border-gray-200 text-left text-white p-1 w-32" >
                                            {golds.type}
                                        </th>
                                        <th className="border border-gray-200 text-left text-white p-1  whitespace-nowrap" >
                                            Mua vào
                                        </th>
                                        <th className="border border-gray-200 text-left text-white p-1  whitespace-nowrap" >
                                            Bán ra
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {golds.list.map((item, index) => {
                                        let textBuy = "", textSell = "";
                                        if (item.sell > 0)
                                            textSell = item.sell.toString()
                                                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                        else if (item.sell === 0)
                                            textSell = "0";
                                        if (item.buy > 0)
                                            textBuy = item.buy.toString()
                                                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                                        else if (item.buy === 0)
                                            textBuy = "0";
                                        return (
                                            <tr key={index} className={`text-sm ${index % 2 === 0 ? "bg-gray-50" : ""}`} >
                                                <td className="px-1 border border-gray-200" >{item.name}</td>
                                                <td className="px-1 border border-gray-200" >
                                                    <div>{textBuy}</div>
                                                    {item.changeBuy === 0 ? "" :
                                                        item.changeBuy > 0 ?
                                                            <div className="text-green-600" >
                                                                <ArrowDropUpIcon className="-ml-2.5 " viewBox="0 0 15 24" />
                                                                <span>{Math.abs(item.changeBuy)}K</span>
                                                            </div>
                                                            :
                                                            <div className="text-red-600" >
                                                                <ArrowDropDownIcon className="-ml-2.5" viewBox="0 0 15 24" />
                                                                <span>{Math.abs(item.changeBuy)}K</span>
                                                            </div>
                                                    }
                                                </td>
                                                <td className="px-1 border border-gray-200" >
                                                    <div>{textSell}</div>
                                                    {item.changeSell === 0 ? "" :
                                                        item.changeSell > 0 ?
                                                            <div className="text-green-600" >
                                                                <ArrowDropUpIcon className="-ml-2.5" viewBox="0 0 15 24" />
                                                                <span>{Math.abs(item.changeSell)}K</span>
                                                            </div>
                                                            :
                                                            <div className="text-red-600" >
                                                                <ArrowDropDownIcon className="-ml-2.5" viewBox="0 0 15 24" />
                                                                <span>{Math.abs(item.changeSell)}K</span>
                                                            </div>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <div className="text-right p-1 border border-gray-200 text-sm text-gray-700">
                                Cập nhật: {`${date} ${time}`}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}