import { useSelector, useDispatch } from "react-redux";
import { updateBike, setEditBike } from "./Redux/Features/bikeSlice";
import { useState } from "react";

export default function EditBike() {
    const dispatch = useDispatch();
    const editData = useSelector((state) => state.bike.editBikeData);

    const [formData, setFormData] = useState(editData);

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(updateBike(formData));
    };

    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">

            <div className="w-full max-w-2xl bg-neutral-900 border border-white/10 rounded-2xl p-10">

                <h2 className="text-3xl font-semibold text-white mb-6">Edit Bike</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>

                    {/* Owner Name */}
                    <div>
                        <input
                            type="text"
                            name="owner_name"
                            value={formData.owner_name}
                            onChange={handleChange}
                            className="w-full bg-neutral-800 text-white p-3 rounded"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <input
                            type="text"
                            name="contect_num"
                            value={formData.contect_num}
                            onChange={handleChange}
                            className="w-full bg-neutral-800 text-white p-3 rounded"
                        />
                    </div>

                    {/* Model */}
                    <div>
                        <input
                            type="text"
                            name="bike_model"
                            value={formData.bike_model}
                            onChange={handleChange}
                            className="w-full bg-neutral-800 text-white p-3 rounded"
                        />
                    </div>

                    {/* Registration Number */}
                    <div>
                        <input
                            type="text"
                            name="registration_num"
                            value={formData.registration_num}
                            onChange={handleChange}
                            className="w-full bg-neutral-800 text-white p-3 rounded"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-white text-black font-semibold rounded-lg"
                    >
                        Update Bike
                    </button>

                    {/* Cancel */}
                    <button
                        type="button"
                        onClick={() => dispatch(setEditBike(null))}
                        className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}
