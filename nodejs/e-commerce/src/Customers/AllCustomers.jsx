import React from "react";
import TableCom from "../CommonComp/TableCom";

function AllCustomers() {
    const Heading = [
        {key:"Customer", value:"Customer"},
        {key:"CustomerId", value:"Customers Id"},
        {key:"Country", value:"Country"},
        {key:"Order", value:"Order"},
        {   key:"Gender", 
            value:"Gender",
            myComponent: (Gender) => {
                const GenderStyle = {
                    "Male": "bg-blue-400 rounded-md text-center",
                    "Female": "bg-pink-400 rounded-md text-center",
                };

                return <p className={`${GenderStyle[Gender]}`}>{Gender}</p>
            }
        }
    ];

    const CustomersData = [
        {Customer: "Zeke Arton", CustomerId:"#895280", Country:"India", Order:"513", Gender:"Male"},
        {Customer: "Zeke Arton", CustomerId:"#109280", Country:"Ukraine", Order:"513", Gender:"Female"},
        {Customer: "Zeke Arton", CustomerId:"#895280", Country:"Libya", Order:"513", Gender:"Male"},
        {Customer: "Zeke Arton", CustomerId:"#895280", Country:"Portugal", Order:"513", Gender:"Female"},
        {Customer: "Zeke Arton", CustomerId:"#895280", Country:"India", Order:"513", Gender:"Female"},
        {Customer: "Zeke Arton", CustomerId:"#895280", Country:"Ukraine", Order:"513", Gender:"Male"},
        {Customer: "Zeke Arton", CustomerId:"#895280", Country:"Bhutan", Order:"513", Gender:"Male"},
    ];

    return(
        <TableCom Headings={Heading} Data={CustomersData}/>
    )
}

export default AllCustomers