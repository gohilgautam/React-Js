import { useState } from "react";
import { FaMotorcycle, FaUser, FaPhone, FaRegIdCard } from "react-icons/fa";
import { HiUser, HiPhone, HiClipboardList } from "react-icons/hi";
import type { bikeForm } from "../Types/BikeForm";
import { useDispatch } from "react-redux";
import { addNewBike } from "../Redux/Features/bikeSlice";

export default function BikeRegisation() {
    const dispatch = useDispatch();

    const [bikeData, setBikeData] = useState<bikeForm>({
        id: 0,
        owner_name: "",
        contect_num: "",
        bike_brand: "",
        bike_model: "",
        registration_num: "",
        bike_type: "",
        address: "",
    });


    const handleEvent = (e: any) => {
        const { name, value } = e.target;
        setBikeData({ ...bikeData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const newBike = {
            ...bikeData,
            id: Math.floor(Math.random() * 999999),
        };

        dispatch(addNewBike(newBike));

        console.log("Registration Data:", newBike);

        // RESET FORM
        setBikeData({
            id: 0,
            owner_name: "",
            contect_num: "",
            bike_brand: "",
            bike_model: "",
            registration_num: "",
            bike_type: "",
            address: "",
        });
    };




    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6 rounded-xl">
            <div className="w-full max-w-2xl bg-neutral-900 border border-white/10 rounded-2xl shadow-xl p-10">

                <div className="flex items-center gap-3 mb-2">
                    <FaMotorcycle className="text-white text-3xl" />
                    <h2 className="text-3xl font-semibold text-white tracking-tight">
                        Bike Registration Form
                    </h2>
                </div>

                <p className="text-neutral-400 mb-8 text-sm">
                    Enter bike and owner details carefully.
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>

                    {/* Owner Name */}
                    <div className="space-y-1">
                        <label className="text-neutral-300 text-sm flex items-center gap-2">
                            <HiUser className="text-neutral-500" /> Owner Name
                        </label>
                        <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-xs" />
                            <input
                                type="text"
                                name="owner_name"
                                value={bikeData.owner_name}
                                onChange={handleEvent}
                                placeholder="Enter owner name"
                                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-10 py-3 text-white placeholder-neutral-500 focus:border-white outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                        <label className="text-neutral-300 text-sm flex items-center gap-2">
                            <HiPhone className="text-neutral-500" /> Mobile Number
                        </label>
                        <div className="relative">
                            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-xs" />
                            <input
                                type="tel"
                                name="contect_num"
                                value={bikeData.contect_num}
                                onChange={handleEvent}
                                placeholder="(+91) 98765 43210"
                                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-10 py-3 text-white placeholder-neutral-500 focus:border-white outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Brand / Model */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Brand */}
                        <div className="space-y-1">
                            <label className="text-neutral-300 text-sm flex items-center gap-2">
                                <FaMotorcycle className="text-neutral-500" /> Bike Brand
                            </label>
                            <select
                                name="bike_brand"
                                value={bikeData.bike_brand}
                                onChange={handleEvent}
                                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-white outline-none transition-all"
                            >
                                <option value="">Select Brand</option>
                                <option>Honda</option>
                                <option>Yamaha</option>
                                <option>Royal Enfield</option>
                                <option>TVS</option>
                                <option>Hero</option>
                                <option>KTM</option>
                            </select>
                        </div>

                        {/* Model */}
                        <div className="space-y-1">
                            <label className="text-neutral-300 text-sm flex items-center gap-2">
                                <HiClipboardList className="text-neutral-500" /> Bike Model
                            </label>
                            <input
                                type="text"
                                name="bike_model"
                                value={bikeData.bike_model}
                                onChange={handleEvent}
                                placeholder="Ex: Classic 350, R15, etc."
                                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:border-white outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Registration Number */}
                    <div className="space-y-1">
                        <label className="text-neutral-300 text-sm flex items-center gap-2">
                            <FaRegIdCard className="text-neutral-500" /> Registration Number
                        </label>
                        <input
                            type="text"
                            name="registration_num"
                            value={bikeData.registration_num}
                            onChange={handleEvent}
                            placeholder="Ex: GJ05 AB 1234"
                            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:border-white outline-none transition-all"
                        />
                    </div>

                    {/* Bike Type */}
                    <div className="space-y-1">
                        <label className="text-neutral-300 text-sm flex items-center gap-2">
                            <FaMotorcycle className="text-neutral-500" /> Bike Type
                        </label>
                        <select
                            name="bike_type"
                            value={bikeData.bike_type}
                            onChange={handleEvent}
                            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-white outline-none transition-all"
                        >
                            <option value="">Select Type</option>
                            <option>Sports</option>
                            <option>Cruiser</option>
                            <option>Scooter</option>
                            <option>Electric</option>
                            <option>Dirt</option>
                        </select>
                    </div>

                    {/* Address */}
                    <div className="space-y-1">
                        <label className="text-neutral-300 text-sm flex items-center gap-2">
                            <HiClipboardList className="text-neutral-500" /> Address
                        </label>
                        <textarea
                            name="address"
                            value={bikeData.address}
                            onChange={handleEvent}
                            placeholder="Enter full address"
                            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 h-24 text-white placeholder-neutral-500 focus:border-white outline-none transition-all resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-300 transition-all shadow-md"
                    >
                        Register Bike
                    </button>

                </form>
            </div>
        </div>
    );
}
