import { configureStore } from '@reduxjs/toolkit'
import BikeRegisation from './Features/bikeSlice'

export const store = configureStore({
    reducer: {
        bikeRegistion: BikeRegisation
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch