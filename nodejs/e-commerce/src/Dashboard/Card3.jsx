import React from "react";

function Card3() {

    const Card3Data = [
        {name: "Expenses", amount: "624k"}
    ];

    return(
        <>
        {Card3Data.map((item, index) => {
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

export default Card3;