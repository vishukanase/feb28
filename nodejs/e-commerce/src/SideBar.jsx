import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { VscCircleSmall } from "react-icons/vsc";
import { Link, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

function SideBar() {

    // this for Theme 
    const [toggleDarkMode, setToggleMode] = useState(true);
    const Themetoggle = () => {
        setToggleMode(!toggleDarkMode)
        console.log("Theme toggle is on");
    };

    const [expand, setExpand] = useState(null);
    const sidebarData = [
        { name: "Dashboard", submenu: [] },
        { name: "Products", submenu: [
            { name: "Product List", path: "/productList"},
            { name: "Add Product", path: "/addProduct"},
            { name: "Category List", path: "/categoryList"},
        ]},
        { name: "Orders", submenu: [
            { name: "Order List", path: "/orderList" },
            { name: "Order Details", path: "/orderDetails" },
        ]},
        { name: "Customers", submenu: [
            { name: "All Customers", path: "/AllCustomer" },
            { name: "Customer Details", path: "/CustomerDetails" },
        ]},
        { name: "Manage Reviews", path:"/manageReviews", submenu: [] },
        { name: "Referrals", submenu: [] },
        { name: "Settings", submenu: [] },
    ];

    const toggle = (index) => {
        setExpand(expand === index ? null : index);
    };

    return (
        <>
        <div className="flex">
        <div className={`h-screen w-[240px] fixed ${toggleDarkMode ? "bg-CardColor text-white":"bg-white text-black"}`}>
            <h3 className="pt-3 pl-[66px] text-2xl mb-5">Vuexy</h3>
            <h3 className="pt-3 ml-8 text-l mb-5">E-Commerce</h3>
            {sidebarData.map((item, index) => (
                <div key={index}>
                    
                    <div className="flex ml-2 pl-3 mt-2 mr-4 rounded-lg hover:bg-buttonColor">
                        <VscCircleSmall size={25} />
                        <span>{item.name}</span>
                        
                        {item.submenu.length > 0 && (
                            <div className="ml-0" onClick={() => toggle(index)}>
                                {expand === index ? <RiArrowDropUpLine size={20} /> : <RiArrowDropDownLine size={20} />}
                            </div>
                        )}
                    </div>
                    {expand === index && (
                        <div className="">
                            {item.submenu.map((itm, subIndex) => 
                                (
                                    itm.path ? (
                                        <Link key={subIndex} to={itm.path} className="ml-12 flex pl-3 mr-10 rounded-lg hover:bg-buttonColor">{itm.name}</Link> ): (<h1 className="ml-12">{itm.name}</h1>
                                )))}
                        </div>
                    )}
                </div>
            ))}
        </div>
        <div className="ml-64">
            <SearchBar themeButton={Themetoggle} theme={toggleDarkMode}/>
            <div className="flex-grow overflow-auto pt-24">
                <Outlet/>
            </div>
        </div>
        </div>
        </>
    );
}

export default SideBar;