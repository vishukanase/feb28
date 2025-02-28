import AddressCom from "../CommonComp/AddressCom";


function Address(){
    const Heading1 = "Shipping Address";
    const Address1 = "45 Roker Terrace Latheronwheel KW5 8NW,London UK";

    const Heading2 = "Billing address";
    const Address2 = "45 Roker Terrace Latheronwheel KW5 8NW,London UK";

    return(
        <>
        <div className="flex justify-evenly">
            <AddressCom Heading={Heading1} Address={Address1}/>
            <AddressCom Heading={Heading2} Address={Address2}/>
        </div>
        </>
    )
}

export default Address;