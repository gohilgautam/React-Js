import { createSlice } from "@reduxjs/toolkit";
import type { bikeState } from "../../Types/BikeForm";

const initialState: bikeState = {
    bikes: [],
    editBikeData: null
};

export const bikeSlice = createSlice({
    name: "bikeRegistration",
    initialState,
    reducers: {
        addNewBike: (state, action) => {
            state.bikes.push(action.payload);
            localStorage.setItem("bikes", JSON.stringify(state.bikes));
        },

        deleteBike: (state, action) => {
            const id = action.payload;
            state.bikes = state.bikes.filter((b) => b.id !== id);
            localStorage.setItem("bikes", JSON.stringify(state.bikes));
        },

        fetchBikes: (state) => {
            state.bikes = JSON.parse(localStorage.getItem("bikes") || "[]");
        },

        setEditBike: (state, action) => {
            state.editBikeData = action.payload;
        },

        updateBike: (state, action) => {
            const updated = action.payload;
            state.bikes = state.bikes.map((b) =>
                b.id === updated.id ? updated : b
            );
            localStorage.setItem("bikes", JSON.stringify(state.bikes));
            state.editBikeData = null;
        }
    }
});

export const { addNewBike, deleteBike, fetchBikes, setEditBike, updateBike } =
    bikeSlice.actions;
export default bikeSlice.reducer;
