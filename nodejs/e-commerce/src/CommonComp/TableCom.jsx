import React from "react"

function TableCom(Props){

    const Headings = Props.Headings;
    const Data = Props.Data;
    const width = Props.Width;

    return(

    // w-[900px] sm:w-[600px] 
    <table className={`${width ? width : "w-[900px]"} m-5 bg-CardColor text-white rounded-lg`}>
        <thead>
            <tr className="text ml-5">
                {Headings.map((item, index) => (
                    <th key={index} className="py-3 px-4 text-lg">
                        {item.value}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody className="">
            {Data.map((item, index) => (
                <tr key={index} className="border-b border-gray-600">
                    {
                        Headings.map((itm, index) => {
                            return(
                                <td key={index} className="p-4 text-center">{itm.myComponent ? itm.myComponent(item[itm.key]):item[itm.key]}</td>
                            )
                        })
                    }
                </tr>
            ))}
        </tbody>
    </table>
    )
}

export default TableCom;