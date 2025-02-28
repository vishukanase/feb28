import CustomerDetailCard from "./CustomerDetails";
import TableCom from "../CommonComp/TableCom";
import CustomerProfile from "./CustomerProfile";
import { FiDollarSign } from "react-icons/fi";

function CustomersPage() {
    const Data = [
            {name: "Account Balance", number:"$2345", desc:"Account balance for next purchase", icon:<FiDollarSign size={18}/>},
            {name: "Loyalty Program", number:"3000", desc:"Account balance for next purchase", icon:<FiDollarSign size={18}/>},
            {name: "Wishlist", number:"14", desc:"Account balance for next purchase", icon:<FiDollarSign size={18}/>},
            {name: "Coupons", number:"21", desc:"Account balance for next purchase", icon:<FiDollarSign size={18}/>},
        ]

    const CustomerOrderHeading = [
        {key:"OrderId", value:"Order Id"},
        {key:"Date", value:"Date"},
        {   key:"Status",
            value:"Status",
            myComponent: (status) =>{
                const StatusStyle = {
                    "Out for delivery": "bg-red-600 text-white",
                    "Ready to Pickup" : "bg-blue-600 text-white",
                    "Delivered": "bg-green-600 text-white",
                    "Dispatched": "bg-yellow-600 text-white",
                }
                return <p className={`${StatusStyle[status]}`}>{status}</p>
            }
        },
        {key:"Spent", value:"Spent"},
    ]

    const CustomerOrderData = [
        {OrderId: "#9957", Date:"Nov 29, 2022", Status:"Out for delivery", Spent:"$59.28"},
        {OrderId: "#9957", Date:"Nov 29, 2022", Status:"Ready to Pickup", Spent:"$59.28"},
        {OrderId: "#9957", Date:"Nov 29, 2022", Status:"Delivered", Spent:"$59.28"},
        {OrderId: "#9957", Date:"Nov 29, 2022", Status:"Dispatched", Spent:"$59.28"},
        {OrderId: "#9957", Date:"Nov 29, 2022", Status:"Delivered", Spent:"$59.28"},
        {OrderId: "#9957", Date:"Nov 29, 2022", Status:"Out for delivery", Spent:"$59.28"},
    ]
    
    return(
        <>
        <div className="grid grid-cols-3 ">
            <div className="grid col-span-1">
            <CustomerProfile />
            <CustomerProfile />
            </div>
            <div className="grid col-span-1">
            <CustomerDetailCard CustomerData={Data}/>
            <TableCom Headings={CustomerOrderHeading} Data={CustomerOrderData} Width={"w-[600px]"}/>
            </div>
        </div>
        </>
    )
}

export default CustomersPage;