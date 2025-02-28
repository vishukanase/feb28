import React from "react";
import { FaStar } from "react-icons/fa6";

function Card2() {

    const Card2Data = [
        {name: "Profit", amount: "624k", month: "Last Month"}
    ];

    return(
        <>
        {Card2Data.map((item, index) => {
            return(
            <div key={index} className="w-[438px] h-[200px] bg-CardColor ml-5 mt-5 rounded-lg text-white">
                <h2 className="text-[18px] ml-5 pt-5">{item.name}</h2>
                <p className="text-[18px] ml-5 pt-24">{item.amount}</p>
            </div>
            )
        })}
        </>
    )

}

export default Card2;