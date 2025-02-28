import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiBank } from "react-icons/ci";
import { FaPaypal, FaRegCreditCard, FaWallet } from "react-icons/fa6";
 
function Transaction() {
    const TransactionData = [
        {name:"wallet", desc: "Starbucks", amt:"$22", icon: <FaWallet size={23}/>},
        {name:"wallet", desc: "Starbucks", amt:"$22", icon: <CiBank size={23}/>},
        {name:"wallet", desc: "Starbucks", amt:"$22", icon: <FaPaypal size={23}/>},
        {name:"wallet", desc: "Starbucks", amt:"$22", icon: <FaRegCreditCard size={23}/>},
        {name:"wallet", desc: "Starbucks", amt:"$22", icon: <BsCurrencyDollar size={23}/>},
        {name:"wallet", desc: "Starbucks", amt:"$22", icon: <FaPaypal size={23}/>},
        {name:"wallet", desc: "Starbucks", amt:"$22", icon: <CiBank size={23}/>},
    ]
 
    return(
        <>
            <div className="bg-CardColor p-5 w-[438px] mt-5 ml-1 text-white rounded-lg">
            <h1>Transactions</h1>
            <p className="text-gray-400 text-sm">Total 58 Transactions done in this Month</p>
 
            <div className="mt-5">
                {TransactionData.map((item, index) => {
                    return(
                        <div key={index} className="mt-2 flex items-center justify-between">
                            <div className="flex items-center">
                                <div>{item.icon}</div>
                                <div className="ml-4">
                                <div>{item.name}</div>
                                <div className="text-gray-400 text-sm">{item.desc}</div>
                                </div>
                            </div>
                            <div>
                                <div>{item.amt}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
 
            </div>
        </>
    )
}
 
export default Transaction;