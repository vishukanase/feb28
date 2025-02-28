import { useState } from "react";
import { useForm } from "react-hook-form";

function OrganiseForm() {

    const VendorTypes = ["mens clothing", "womens clothing", "childrens clothing"];
    const CategoryTypes = ["House Hold", "Management", "Electronics", "Office", "Automotive"];
    const StatusTypes = ["Published", "scheduled", "Inactive"];
    const { register, handleSubmit, formState} = useForm();
    const [isDropDownOpenVendor, setDropDownVendor] = useState(false);
    const [isDropDownOpenCat, setDropDownCat] = useState(false);
    const [isDropDownOpenStatus, setDropDownStatus] = useState(false);


    const onSubmit = data => {
        console.log(data)
    }

    const toggleDropDownVendor = () => {
        setDropDownVendor(!isDropDownOpenVendor);
        setDropDownCat(false);
        setDropDownStatus(false);
    }

    const toggleDropDownCat = () => {
        setDropDownCat(!isDropDownOpenCat);
        setDropDownVendor(false);
        setDropDownStatus(false);
    }

    const toggleDropDownStatus = () => {
        setDropDownStatus(!isDropDownOpenStatus);
        setDropDownCat(false);
        setDropDownVendor(false);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="w-[280px] rounded-lg bg-CardColor text-white ml-5 p-5">
            <h1>Organise</h1>

            <div className="mt-4">
            
            <div className="relative">
            <label>Vendor</label>
            <br />
            <input type="text" placeholder="Select Vendor" {...register("vendor")} onClick={toggleDropDownVendor} className="mt-2 pl-2 border rounded-md w-full h-8 bg-CardColor"/>
                <div className="absolute">
                {isDropDownOpenVendor && (
                    <div className="mt-0 p-2">
                        {VendorTypes.map((item, index) => {
                            return(
                                <p key={index} className="border mt-0.5 rounded-md hover:bg-violet-600 h-8 pl-3">{item}</p>
                            )
                        })}
                    </div>
                )}
                </div>
            </div>
            
            <div className="relative">
            <label>Category</label>
            <br />
            <input type="text" placeholder="Select Category" {...register("category")} onClick={toggleDropDownCat} className="mt-2 pl-2 border rounded-md w-full h-8 bg-CardColor"/>

                {isDropDownOpenCat && (
                    <div className="mt-0 p-2">
                        {CategoryTypes.map((item, index) => {
                            return(
                                <p key={index} className="border mt-0.5 rounded-md hover:bg-violet-600 h-8 pl-3">{item}</p>
                            )
                        })}
                    </div>
                )}
            </div>
            
            <div className="relative">
            <label>Status</label>
            <br />
            <input type="text" placeholder="Published" {...register("Status")} onClick={toggleDropDownStatus} className="mt-2 pl-2 border rounded-md w-full h-8 bg-CardColor"/>

                {isDropDownOpenStatus && (
                    <div className="mt-0 p-2">
                        {StatusTypes.map((item, index) => {
                            return(
                                <p key={index} className="border mt-0.5 rounded-md hover:bg-violet-600 h-8 pl-3">{item}</p>
                            )
                        })}
                    </div>
                )}
            </div>
            </div> 
        </form>
    )
}

export default OrganiseForm