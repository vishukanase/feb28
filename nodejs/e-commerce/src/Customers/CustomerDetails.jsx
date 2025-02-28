import { FiDollarSign } from "react-icons/fi";

function CustomerDetailCard(Props) {

    const CustomerDetails = Props.CustomerData;

    return(
        <>
        <div className="grid grid-cols-2 ">
            {CustomerDetails.map((item, index)=> {
                return(
                <div key={index} className="bg-CardColor m-5 p-4 text-white rounded-lg">
                    <div>{item.icon}</div>
                    <h1 className="mt-2">{item.name}</h1>
                    <div>
                        <p className="text-sm mt-3">{item.number} {item.desc}</p>
                    </div>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
                );
            })}
        </div>
        </>
    )
}

export default CustomerDetailCard;