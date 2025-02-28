import React from "react";

function Card1() {
    const CardData = [
        {name: "Congratulations John !",
         award : "Best Seller of the Month", 
         sales: "$48.9K",
         option : "View Sales"
        },
    ];

    return(
        <>
        {CardData.map((item, index) => {
            return(
            <div key={index} className="bg-CardColor text-white w-[290px] h-[180px] ml-5 mt-5 rounded-lg">
                {/* ZZZ in ml and pt*/}
                <div className="ml-6 pt-5"> 
                    <h2 className="text-[18px]">{item.name}</h2>
                    <p className="text-[13px]">{item.award}</p>
                </div>
                <div className="ml-6 mt-7">
                    <h2 className="text-[21px]">{item.sales}</h2>
                    <button class="bg-indigo-600 hover:bg-indigo-700 text-white text-[14px] py-1 px-4 rounded mt-1">{item.option}</button>
                </div>
            </div>
            )
        })}

        </>
    )
}

export default Card1;