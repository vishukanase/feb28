import React from "react";

function    AddressCom(Props){
    const heading = Props.Heading;
    const address = Props.Address;

    return(
        <div className="bg-CardColor w-[200px] h-[200px] p-7 text-white rounded-lg m-5">
            <h1>{heading}</h1>
            <br />
            <div className="text-gray-500 text-sm">
                <p>{address}</p>
            </div>
        </div>
    )
}

export default AddressCom;