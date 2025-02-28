import React from "react";

import { useForm } from "react-hook-form";

function VarientForm() {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const varientTypes = ["size", "color", "weight","smell"];

    const onSubmit = data =>{
        console.log(data)
    }

    return(
        <>
            <form className="w-[600px] bg-CardColor m-5 p-5 rounded-lg text-white">
                <h1 className="mb-4">Varients</h1>

                <label className="text-sm">Options</label>
                <br />
                <div className="flex">
                    <input type="text" placeholder="size" {...register("options")} className="bg-CardColor border rounded-lg h-8 w-[150px] pl-3 mr-3"/>
                    <input type="text" placeholder="Enter Size" {...register("size")} className="bg-CardColor border rounded-lg h-8 w-full pl-3"/>
                </div>

                <button className="bg-buttonColor text-white h-8 mt-5 text-sm w-40 rounded-md">+ Add Another Option</button>
                

            </form>
        </>
    )
}

export default VarientForm;