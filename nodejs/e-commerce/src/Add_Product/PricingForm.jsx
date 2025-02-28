import { useForm } from "react-hook-form";

function PricingForm() {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data)

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="w-[280px] h-72 bg-CardColor text-[#cfcde4] mt-5 p-5 rounded-lg">
            <h1 className="text-xl">Pricing</h1>

            <div className="mt-3">
            <label className="">Base Price</label>
            <input type="text" placeholder="Price" {...register("Base_Price")} className="bg-CardColor border rounded-md h-8 pl-3 text-sm"/>
            </div>

            <div className="mt-4">
            <label>Discounted Price</label>
            <input type="text" placeholder="Discounted Price" {...register("Discounted_price")} className="bg-CardColor border rounded-md h-8 pl-3 text-sm"/>
            </div>
            
            <div className="flex mt-4">
                <input type="checkbox" className="mr-3"/>
                <p>Charge tax on this product</p>
            </div>
        </form>
    )
}

export default PricingForm;