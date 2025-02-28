import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa6";
import { HiChartPie } from "react-icons/hi";
 
function EarningRepo(){
 
    const EarnData = [
        {name: "Net Profit", desc: "12.4k Sales", amount: "$1,619", percentage: "22%", icon: <HiChartPie size={20}/>},
        {name: "Net Profit", desc: "12.4k Sales", amount: "$1,619", percentage: "22%", icon: <AiOutlineDollar size={20}/>},
        {name: "Net Profit", desc: "12.4k Sales", amount: "$1,619", percentage: "22%", icon: <FaCreditCard size={20}/>},

    ]
    return(
        
        <div className="bg-CardColor p-5 w-[438px] h-[448px] text-white mt-5 ml-5 rounded-lg">
            <h1>Earning Reports</h1>
            <p>Weekly Earnings Overview</p>
 
            <div className="space-y-4 mt-6">
                {EarnData.map((item, index) => {
                    return(
                    <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center">
                            <p>{item.icon}</p>
                            <div className="ml-4">
                                <h1>{item.name}</h1>
                                <p className="text-[15px] text-gray-500">{item.desc}</p>
                            </div>
                            
                        </div>
                        {/* DDDD  */}
                        <div className="flex space-x-6 justify-center">
                            <p className="text-base text-gray-300">{item.amount}</p>
                            <p className="text-sm text-gray-500">{item.percentage}</p>
                        </div>
                    
                    </div>
                    )
                })}
            </div>
        </div>
            
    )
}
export default EarningRepo;