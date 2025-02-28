import React from "react";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
 
function Orders() {
    const OrderData = [
        {sender: "Myrtle Ullrich", sendAdd: "101 Boulder, California(CA), 95959", receiver:"Barry Schowalter", recAdd: "939 Orange, California(CA), 92118"},
        {sender: "Myrtle Ullrich", sendAdd: "101 Boulder, California(CA), 95959", receiver:"Barry Schowalter", recAdd: "939 Orange, California(CA), 92118"},
 
    ]

    return(
        <>
            <div className="bg-CardColor p-5 w-[438px] m-5 text-white rounded-lg">
                <div className="ml-3">
                    <h1>Orders by Countries</h1>
                    <p className="text-[15px] text-gray-500">62 deliveries in progress</p>
                </div>
 
            <div className="flex justify-between mt-6">
                <h1>New</h1>
                <h1>Preparing</h1>
                <h1>Shipping</h1>
            </div>
            <hr className="border-gray-400 mt-2"/>
 
 
            <div className="mt-5 ml-8">
                {OrderData.map((item, index) => {
                    return(
                        <div key={index} className="mt-2">
                            <div>
                            {/* <FaCheckCircle /> */}
                                <h1 className="text-[15px]">Sender</h1>
                                <h1>{item.sender}</h1>
                                <p className="text-[15px] text-gray-500">{item.sendAdd}</p>

                            {/* <FaMapMarkerAlt /> */}
                                <h1 className="text-[15px]">Receiver</h1>
                                <h1>{item.receiver}</h1>
                                <p className="text-[15px] text-gray-500">{item.recAdd}</p>
                                <hr className="border-gray-400 mt-2"/>
 
                            </div>
                        </div>
                    )
                })}
            </div>
 
            </div>
        </>
    )
}
 
export default Orders;