import React from "react";
import { FaCheckCircle, FaRegSave } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdDelete, MdDownload, MdPieChart } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

function InvoiceTable() {

    const Header = ["checkbox", "id", "Status", "Total", "Issue Date", "Actions"]
    
    const InvoiceData = [
        {id:"#4477", status:<MdPieChart />, total: "$3428", issue_date: "12/13/2020", actions: [<MdDelete />, <IoMdEye />, <SlOptionsVertical />]},
        {id:"#5020", status:<MdDownload />, total: "$5219", issue_date: "07/17/2020", actions: [<MdDelete />, <IoMdEye />, <SlOptionsVertical />]},
        {id:"#4506", status:<FaCheckCircle />, total: "$3719", issue_date: "01/02/2023", actions: [<MdDelete />, <IoMdEye />, <SlOptionsVertical />]},
        {id:"#4515", status:<FaCheckCircle />, total: "$4749", issue_date: "12/13/2020", actions: [<MdDelete />, <IoMdEye />, <SlOptionsVertical />]},
        {id:"#4831", status:<MdPieChart />, total: "$4056", issue_date: "01/02/2023", actions: [<MdDelete />, <IoMdEye />, <SlOptionsVertical />]},
        {id:"#4881", status:<FaRegSave />, total: "$2771", issue_date: "07/17/2020", actions: [<MdDelete />, <IoMdEye />, <SlOptionsVertical />]},
    ]

    return(

        <>
        <div className="bg-CardColor w-[900px] m-5 rounded-lg text-white p-5">
            <div className="flex justify-between items-center w-full">
            
                <div className="flex space-x-4">
                    <h2 className="">Show</h2>
                    <h2 className="border-2 border-gray-500 w-[130px] h-8 rounded-lg pl-3">6 </h2>
                    <h1 className="border-2 border-gray-500 w-full h-8 rounded-lg items-center pl-4 bg-violet-600"> + Create Invoice</h1>
                </div>

                <div className="flex space-x-8 mr-3">
                    <input type="text" placeholder="Search Invoice" className="border-2 border-gray-500 bg-CardColor text-white h-8 w-[250px] pl-4 rounded-lg"/>
                    <h1 className="border-2 border-gray-500 text-white h-8 w-[200px] pl-4 rounded-lg pt-1">Select Status</h1>
                </div>

            </div>

        <hr className="border-gray-400 mt-5"/>

        <table className="mt-4 w-full">
            <thead>
                <tr>
                {Header.map((item, index) => {
                    return(
                    <th key={index} className="p-2 ">{item}</th>
                    )
                })}
                </tr>
            </thead>
        
            <tbody className="">
                
                {InvoiceData.map((item, index) => {
                    return(
                    <tr key={index} className="text-center space-y-9">
                        <td><input type="checkbox" className=""/></td>
                        <td className="p-2">{item.id}</td>
                        <td className="flex justify-center items-start p-2">{item.status}</td>
                        <td className="p-2">{item.total}</td>
                        <td className="p-2">{item.issue_date}</td>
                        <td className="flex justify-center items-center p-2">{item.actions}</td>
                    </tr>
                    )
                })}
                
            </tbody>
        </table>
        </div>
        </>
    )

}

export default InvoiceTable;