import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiNightSleep } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import { IoLanguage, IoSearchSharp } from "react-icons/io5";
import { TbTableShortcut } from "react-icons/tb";

function SearchBar(Props) {

    const toggle = Props.themeButton;
    const theme = Props.theme;

    return (
        <div className={`fixed mt-3 w-[900px] h-[50px] ${theme ? "bg-CardColor text-white":"bg-white text-black"}  m-5 flex items-center rounded-lg`}>
            <div className="flex items-center flex-grow px-2">
                <IoSearchSharp className="mr-3 ml-3" size={20} />
                <input
                    type="text"
                    className={`${theme ? "bg-CardColor placeholder-gray-400`":"bg-white text-black placeholder-gray-800"}`}
                    placeholder="Search (Ctrl+/)"
                />
            </div>
            <div className="flex items-center space-x-4 mr-4">
                <IoLanguage className="cursor-pointer" size={20}/>

                <GiNightSleep className="cursor-pointer" size={20} onClick={() => toggle()}/>

                <TbTableShortcut className="cursor-pointer" size={20}/>

                <IoMdNotifications className="cursor-pointer" size={20}/>

                <CgProfile className="cursor-pointer" size={20}/>
            </div>
        </div>

    );

}




export default SearchBar;