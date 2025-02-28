import React from "react";

function CategoryList() {
    const Heading = ["Category", "Description", "Total Products", "Total Earning"];

    const CategoryList = [
        { name: "Travel", desc: "Choose from a wide range of travel accessories from popular brands", total_products: 4186, total_earning: "$7912.99" },
        { name: "Smart Phone", desc: "Choose from a wide range of smartphones from popular brands", total_products: 1947, total_earning: "$99129.99" },
        { name: "Shoes", desc: "Explore the latest shoes from top brands", total_products: 4940, total_earning: "$7912.99" },
        { name: "Jewellery", desc: "Choose from a wide range of jewellery from popular brands", total_products: 4186, total_earning: "$99129.99" },
        { name: "Home Decor", desc: "Choose from a wide range of home decor from popular brands", total_products: 9184, total_earning: "$7912.99" },
        { name: "Grocery", desc: "Get fresh groceries delivered at your doorstep", total_products: 4186, total_earning: "$99129.99" },
        { name: "Games", desc: "Dive into the world of Virtual Reality with the latest games", total_products: 5764, total_earning: "$7912.99" },
    ];

    return (
        <div className="bg-CardColor w-[900px] rounded-lg m-5 p-5 text-white">
            <div className="flex justify-between mb-4">
                <input 
                    type="text" 
                    placeholder="Search Category" 
                    className="ml-5 p-2 rounded-md bg-CardColor text-white placeholder-gray-400 border"
                />
                <button className="bg-[#7367f0] hover:bg-violet-700 rounded-md w-[180px]">
                    + Add Category
                </button>
            </div>
  
            <table className="min-w-full bg-CardColor rounded-lg">
                <thead>
                    <tr>
                        {Heading.map((item, index) => (
                            <th key={index} className="pl-4 pt-2 text-sm">{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {CategoryList.map((item, index) => (
                        <tr key={index} className="">
                            <td className="pl-4"><input type="checkbox" /></td>
                            <td className="pl-1 pt-5">{item.name}</td>
                            <td className="pl-2 pt-5">{item.desc}</td>
                            <td className="pl-2 pt-5">{item.total_products}</td>
                            <td className="pl-2 pt-5">{item.total_earning}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CategoryList;