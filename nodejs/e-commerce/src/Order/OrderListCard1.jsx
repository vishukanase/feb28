import React from "react";
import { FaGift } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { MdLaptop, MdOutlineStorefront } from "react-icons/md";

function OrderListCard1() {
    const productList1Data = [
        {title: "Pending Payment", count: "56", icon:<MdOutlineStorefront size={35}/>        },
        {title: "Completed", count: "12,689", icon:<MdLaptop size={35}/>},
        {title: "Refunded", count: "124", icon:<FaGift size={35}/>},
        {title: "Failed", count: "32", icon:<IoWallet size={35}/>},
    ]

    return(
        <>
            <div className="bg-CardColor p-6 w-[900px] m-5 text-white mt-4 rounded-lg flex justify-between">
                {productList1Data.map((item, index) => {
                    return(
                        <div className="flex">
                            <div key={index}>
                                <h1 className="text-[15px] text-gray-300">{item.title}</h1>
                                <h1 className="text-2xl">{item.count}</h1>
                            </div>
 
                            <div className="ml-7 mt-1">
                                {item.icon}
                            </div>
                            
                        </div>  
                    )
                })}
            </div>
        </>
    )
}
 
export default OrderListCard1;