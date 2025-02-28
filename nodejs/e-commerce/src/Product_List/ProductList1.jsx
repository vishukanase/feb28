import React from "react";
import { FaGift } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { MdLaptop, MdOutlineStorefront } from "react-icons/md";

function ProductList1() {
    const productList1Data = [
        {title: "In-store Sales", amount: "$5,345.43", orders:"5k", icon:<MdOutlineStorefront size={35}/>        },
        {title: "In-store Sales", amount: "$5,345.43", orders:"5k", icon:<MdLaptop size={35}/>},
        {title: "In-store Sales", amount: "$5,345.43", orders:"5k", icon:<FaGift size={35}/>},
        {title: "In-store Sales", amount: "$5,345.43", orders:"5k", icon:<IoWallet size={35}/>},
    ]

    return(
        <>
            <div className="bg-CardColor p-6 w-[900px] m-5 text-white mt-4 rounded-lg flex justify-between">
                {productList1Data.map((item, index) => {
                    return(
                        <div className="flex">
                            <div key={index}>
                                <h1 className="text-[15px] text-gray-300">{item.title}</h1>
                                <h1 className="text-2xl">{item.amount}</h1>
                                <p className="text-[15px] text-gray-300">{item.orders} Orders</p>
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
 
export default ProductList1;