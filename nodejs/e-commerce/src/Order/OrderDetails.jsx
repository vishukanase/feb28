import TableCom from "../CommonComp/TableCom"

function OrderDetails(){
    const OrderDetailsHeadings = [
        {key:"product", value:"Product"},
        {key:"price", value:"Price"},
        {key:"qty", value:"QTY"},
        {key:"total", value:"Total"},
    ]

    const OrderDetailsData = [
        {product: "Wooden Chair", price: "$841", qty: 21, total:54},
        {product: "Oneplus 10", price: "$841", qty: 2, total:54},
        {product: "Nike Jordan", price: "$841", qty: 1, total:54},
        {product: "Face cream", price: "$841", qty: 91, total:54},
    ]

    return(
        <TableCom Headings={OrderDetailsHeadings} Data={OrderDetailsData}/>
    )
}

export default OrderDetails;