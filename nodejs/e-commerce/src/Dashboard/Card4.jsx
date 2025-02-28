import React from "react";

function Card4() {

    const Card4Data = [
        {name: "Generated Leads", number: "4,350"}
    ];

    return(
        <>
        {Card4Data.map((item, index) => {
            return(
            <div key={index} className="w-[900px] h-[200px] bg-CardColor ml-5 mt-5 rounded-lg text-white">
                <h2 className="text-[18px] ml-5 pt-5">{item.name}</h2>
                <p className="text-[14px] ml-5">Monthly Reports</p>
                <p className="text-[18px] ml-5 pt-24">{item.number}</p>
            </div>
            )
        })}
        </>
    )

}

export default Card4;