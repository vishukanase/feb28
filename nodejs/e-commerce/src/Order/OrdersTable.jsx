import React from "react";
import TableCom from "../CommonComp/TableCom";

function OrdersTable() {
    const Headings = [
        { key: "Order", value: "Order" },
        { key: "Date", value: "Date" },
        { key: "Name", value: "Name" },
        { key: "Email", value: "Email" },
        {   key: "Payment",
            value: "Payment",
            myComponent: (paymentStatus) => {
                const paymentColors = {
                    "Pending": "text-yellow-500",
                    "Failed": "text-red-500",
                    "Cancelled": "text-gray-500",
                    "Paid": "text-green-500",
                };
                return <p className={`${paymentColors[paymentStatus]}`}>{paymentStatus}</p>
            }
        },
        {
            key: "Status",
            value: "Status",
            myComponent: (status) => {
                const StatusColors = {
                    "Delivered": "bg-[#2e4b4f] text-[#28b86b] rounded-md text-center",
                    "Dispatched": "bg-[#504448] text-[#fd9e43] rounded-md text-center",
                    "Out for Delivery": " bg-[#3a3b64] text-[#635ac9] rounded-md text-center",
                    "Ready to Pickup": "bg-[#27495f] text-[#06a6bd] rounded-md text-center",
                };
                return <p className={`${StatusColors[status]}`}>{status}</p>;
            }
        },
    ];

    const OrdersData = [
        { Order: "#9941", Date: "Jun 20, 2022, 11:11", Name: "Zacharias Stonhard", Email: "zstonhard1x@ca.gov", Payment: "Pending", Status: "Delivered" },
        { Order: "#9941", Date: "Jun 20, 2022, 11:11", Name: "Zacharias Stonhard", Email: "zstonhard1x@ca.gov", Payment: "Failed", Status: "Dispatched" },
        { Order: "#9941", Date: "Jun 20, 2022, 11:11", Name: "Zacharias Stonhard", Email: "zstonhard1x@ca.gov", Payment: "Cancelled", Status: "Out for Delivery" },
        { Order: "#9941", Date: "Jun 20, 2022, 11:11", Name: "Zacharias Stonhard", Email: "zstonhard1x@ca.gov", Payment: "Paid", Status: "Delivered" },
        { Order: "#9941", Date: "Jun 20, 2022, 11:11", Name: "Zacharias Stonhard", Email: "zstonhard1x@ca.gov", Payment: "Failed", Status: "Ready to Pickup" },
        { Order: "#9941", Date: "Jun 20, 2022, 11:11", Name: "Zacharias Stonhard", Email: "zstonhard1x@ca.gov", Payment: "Pending", Status: "Dispatched" },
        { Order: "#9941", Date: "Jun 20, 2022, 11:11", Name: "Zacharias Stonhard", Email: "zstonhard1x@ca.gov", Payment: "Cancelled", Status: "Dispatched" },
        { Order: "#9941", Date: "Jun 20, 2022, 11:11", Name: "Zacharias Stonhard", Email: "zstonhard1x@ca.gov", Payment: "Failed", Status: "Out for Delivery" },
        { Order: "#9941", Date: "Jun 20, 2022, 11:11", Name: "Zacharias Stonhard", Email: "zstonhard1x@ca.gov", Payment: "Paid", Status: "Delivered" },
        { Order: "#9941", Date: "Jun 20, 2022, 11:11", Name: "Zacharias Stonhard", Email: "zstonhard1x@ca.gov", Payment: "Cancelled", Status: "Ready to Pickup" },
    ];

    return (
        <TableCom Headings={Headings} Data={OrdersData}/>
    );
}
export default OrdersTable;