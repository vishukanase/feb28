import React, { Component } from "react";
import TableCom from "../CommonComp/TableCom";
import { FaStar } from "react-icons/fa6";

function ReviewTable(){

    const ReviewTableHeadings = [
        {key:"Product", value:"Product"},
        {key:"Reviewer", value:"Reviewer"},
        {   key:"Review",
            value:"Review",
            myComponent: (rating) => {
                const Total = 5;
                const Temp = Total-rating;
                const count = [];
                for(let i=0; i<rating; i++){
                    count.push(<FaStar className="text-yellow-400 size-5"/>)
                }
                for(let j=0; j<Temp; j++){
                    count.push(<FaStar className="text-gray-600 size-5"/>)
                }
                
                return <div className="flex">{count}</div>
            }
        
        },
    ]

    const ReviewTableData = [
        {Product:"MacBook Pro 16", Reviewer:"AvatarAbeu Gregorace", Review:3},
        {Product:"MacBook Pro 16", Reviewer:"AvatarAbeu Gregorace", Review:5},
        {Product:"MacBook Pro 16", Reviewer:"AvatarAbeu Gregorace", Review:4},
        {Product:"MacBook Pro 16", Reviewer:"AvatarAbeu Gregorace", Review:3},
        {Product:"MacBook Pro 16", Reviewer:"AvatarAbeu Gregorace", Review:3},
        {Product:"MacBook Pro 16", Reviewer:"AvatarAbeu Gregorace", Review:1},
        {Product:"MacBook Pro 16", Reviewer:"AvatarAbeu Gregorace", Review:4},
        {Product:"MacBook Pro 16", Reviewer:"AvatarAbeu Gregorace", Review:5},
        {Product:"MacBook Pro 16", Reviewer:"AvatarAbeu Gregorace", Review:2},
    ]

    return(
        <TableCom Headings={ReviewTableHeadings} Data={ReviewTableData}/>
    )
}

export default ReviewTable