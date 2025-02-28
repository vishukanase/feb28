import React from "react";
import { FaCartShopping, FaDollarSign } from "react-icons/fa6";
import { MdPieChartOutline, MdSupervisorAccount } from "react-icons/md";

function StatsCard() {

    const heading = "Statistics"

    const StatsCardData = [
        {name: "Sales", amount: "230k", icon: <MdPieChartOutline size={25}/>},
        {name: "Customers", amount: "8.549k", icon: <MdSupervisorAccount size={25}/>},
        {name: "Products", amount: "1.423k", icon: <FaCartShopping size={25}/>},
        {name: "Revenue", amount: "$9745", icon: <FaDollarSign size={25}/>}, 
    ]
    return(
        <>
        <div className="bg-CardColor text-white w-[590px] h-[180px] mt-5 ml-5 rounded-lg  flex flex-row space-x-16">
            {/* <h1 className="text-[18px]">{heading}</h1> */}
            {StatsCardData.map((item, index) => {
                return(
                    <div key={index} className="ml-[20px] mt-[110px] flex flex-row">
                        <div className="mt-3 mr-3 text-white">
                            {item.icon}
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[18px] text-white">{item.amount}</h1>
                            <p className="text-[13px] text-gray-400">{item.name}</p>
                        </div>

                    </div>
                )
            })}
        </div>
        </>
    )
}

export default StatsCard