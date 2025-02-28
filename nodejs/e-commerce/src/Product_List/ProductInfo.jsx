import React from "react";
import { hydrateRoot } from "react-dom/client";
import { FaMobileAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoWatchOutline } from "react-icons/io5";
import { TbShoe } from "react-icons/tb";
 
function ProductInfo() {
    const Heading = ["box","Product", "Category", "Stock", "SKU", "QTY"]
    const ProductData = [
        {name: "Air Jordan", desc: "Air Jordan is a line of basketball shoes produced by Nike",
            category:"shoes", stock:true, sku: 31034, qty:942, catIcon:<TbShoe />, img:""},
        {name: "Air Jordan", desc: "Air Jordan is a line of basketball shoes produced by Nike",
            category:"shoes", stock:true, sku: 31034, qty:942, catIcon:<FaMobileAlt />, img:""},
        {name: "Air Jordan", desc: "Air Jordan is a line of basketball shoes produced by Nike",
            category:"shoes", stock:true, sku: 31034, qty:942, catIcon:<IoWatchOutline />, img:""},
        {name: "Air Jordan", desc: "Air Jordan is a line of basketball shoes produced by Nike",
            category:"shoes", stock:true, sku: 31034, qty:942, catIcon:<FaMobileAlt />, img:""},
        {name: "Air Jordan", desc: "Air Jordan is a line of basketball shoes produced by Nike",
            category:"shoes", stock:true, sku: 31034, qty:942, catIcon:<FaMobileAlt />, img:""},
        {name: "Air Jordan", desc: "Air Jordan is a line of basketball shoes produced by Nike",
            category:"shoes", stock:true, sku: 31034, qty:942, catIcon:<IoWatchOutline />, img:""},
        {name: "Air Jordan", desc: "Air Jordan is a line of basketball shoes produced by Nike",
            category:"shoes", stock:true, sku: 31034, qty:942, catIcon:<FaHouse />, img:""},
    ]

    return(
 
        <div className="bg-CardColor p-5 w-[900px] rounded-lg text-white m-5">
            <h1 className="text-2xl">Filter</h1>
            <div className="flex justify-between mt-4">
                <h1 className="border-2 w-[250px] pl-3 rounded-lg h-8 mr-2">Status</h1>
                <h1 className="border-2 w-[250px] pl-3 rounded-lg h-8 mr-2">Category</h1>
                <h1 className="border-2 w-[250px] pl-3 rounded-lg h-8">Stock</h1>
            </div>
            <hr className="border-gray-400 mt-5"/>
 
 
            <div className="flex justify-between mt-4">
                <input type="text" placeholder="Search Product" className="border-2 rounded-lg bg-slate-800 pl-3 h-9"/>
                <h1 className="border-2 rounded-lg pl-4 h-9 bg-purple-500 w-[150px] justify-center pt-1">+ Add Product</h1>
            </div>
 
            <hr className="border-gray-400 mt-5"/>
 
            <div className="flex justify-between m-2.5">
                {Heading.map((item, index) => {
                    return(
                        <h1 key={index}>{item}</h1>
                    )
                })}
 
            </div>
 
            <div>
                {ProductData.map((item, index) => {
                    return(
                        <>
                            <hr className="border-gray-400"/>
 
                            <div key={index} className="flex justify-between p-2">
                                
                                <IoMdAddCircleOutline size={20} className="mt-3"/>
                                <input type="checkbox" className="bg-slate-800 border-gray-300 rounded size-4 mt-4" />
 
                                <div>
                                    <h1>{item.name}</h1>
                                    <p className="text-[15px] text-gray-300">{item.desc}</p>
                                </div>
 
                                <div className="flex">
                                    <div className="mt-2">{item.catIcon}</div>
                                    <h2 className="ml-3 mt-1 ">{item.category}</h2>
                                </div>
 
                                <h1>{item.stock}</h1>
                                <h1>{item.sku}</h1>
                                <h1>{item.qty}</h1>
                            </div>
                    </>
                    )
                })}
            </div>
        </div>  
    )
}
 
export default ProductInfo;