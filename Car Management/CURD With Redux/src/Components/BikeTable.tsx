import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../Redux/store";
import { deleteBike, setEditBike } from "../Redux/Features/bikeSlice";
// import { deleteBike } from "../Redux/Features/bikeSlice";

const BikeTable = () => {
    const dispatch = useDispatch();

    // Fetch bikes from Redux
    const Bikes = useSelector((state: RootState) => state.bikeRegistion.bikes);

    return (
        <div className="min-h-screen bg-neutral-950 p-10">
            <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8 shadow-xl max-w-5xl mx-auto">

                {/* Header */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                    All Registered Bikes
                </h2>

                <p className="text-neutral-400 text-sm mb-6">
                    All data is fetched from Redux Store.
                </p>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-neutral-800">
                                <th className="p-3 text-left text-neutral-300 text-sm">Owner</th>
                                <th className="p-3 text-left text-neutral-300 text-sm">Brand</th>
                                <th className="p-3 text-left text-neutral-300 text-sm">Model</th>
                                <th className="p-3 text-left text-neutral-300 text-sm">Reg. No</th>
                                <th className="p-3 text-left text-neutral-300 text-sm">Type</th>
                                <th className="p-3 text-center text-neutral-300 text-sm">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {Bikes.map((bike, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-neutral-800 hover:bg-neutral-800/50 transition"
                                >
                                    <td className="p-3 text-neutral-200">{bike.owner_name}</td>
                                    <td className="p-3 text-neutral-200">{bike.bike_brand}</td>
                                    <td className="p-3 text-neutral-200">{bike.bike_model}</td>
                                    <td className="p-3 text-neutral-200">{bike.registration_num}</td>
                                    <td className="p-3 text-neutral-200">{bike.bike_type}</td>

                                    <td className="p-3 text-center flex justify-center gap-2">
                                        {/* Edit Button */}
                                        <button
                                            onClick={() => dispatch(setEditBike(bike))}
                                            className="px-3 py-1 bg-yellow-500 text-white rounded"
                                        >
                                            Edit
                                        </button>


                                        {/* Delete Button */}
                                        <button
                                            onClick={() => dispatch(deleteBike(bike.id))}
                                            className="bg-red-600 px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>

                                    </td>
                                </tr>
                            ))}

                            {Bikes.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="p-6 text-center text-neutral-500 italic"
                                    >
                                        No bikes registered yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default BikeTable;