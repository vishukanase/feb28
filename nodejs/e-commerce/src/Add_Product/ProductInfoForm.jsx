import React from "react";
import { useForm } from "react-hook-form";

function ProductInfoForm() {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="bg-CardColor m-5 p-5 rounded-lg text-white space-y-3 w-[600px]">
            <h1 className="text-lg">Product Information</h1>
            <label>Name</label>
            <br />
            <input type="text" defaultValue="Product Title" {...register("Product_Name")} className="w-full bg-CardColor rounded-lg border h-8 pl-3 text-gray-500 text-sm"/>
            <br />
            <div className="flex justify-between">
                <div>
                    <label >SKU</label>
                    <br />
                    <input type="text" defaultValue="SKU" {...register("SKU")} className="bg-CardColor text-sm rounded-lg border h-8 pl-3 text-gray-500"/>
                </div>

                <div>
                    <label>Barcode</label>
                    <br />
                    <input type="text" defaultValue="013-765" {...register("Barcode")} className="text-sm bg-CardColor rounded-lg border h-8 pl-3 text-gray-500"/>
                </div>
                
            </div>
            
            <label>Description (Optional)</label>
            <br />
            <textarea name="Description" className="w-full bg-CardColor rounded-lg border h-40 pl-3 text-gray-500">Product Description</textarea>
        </form>
    )

}

export default ProductInfoForm