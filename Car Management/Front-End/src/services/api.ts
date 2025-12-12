import axios from "axios";
import type { Car } from "../Types/types";

// Using Vite proxy - requests go through the dev server to avoid CORS
// The proxy in vite.config.ts forwards requests to http://localhost:8000
const BASE_URL = "http://localhost:5173/";

const client = axios.create({ baseURL: BASE_URL + "addcar" });

// Get all cars
export const getCars = async (): Promise<Car[]> => {
  const res = await client.get("/fetchallcars");
  return res.data.data || [];
};

// Get single car by ID
export const getCar = async (id: string): Promise<Car> => {
  const res = await client.get(`/fetchallcars`);
  const cars = res.data.data || [];
  const car = cars.find((c: Car) => c._id === id || c.id === id);
  if (!car) throw new Error("Car not found");
  return car;
};

// Create new car
export const createCar = async (payload: FormData): Promise<Car> => {
  const res = await client.post("/addcar", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data;
};

// Update car
export const updateCar = async (id: string, payload: FormData): Promise<Car> => {
  const res = await client.patch(`/updatecar/${id}`, payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data;
};

// Delete car
export const removeCar = async (id: string): Promise<Car> => {
  const res = await client.delete(`/deletecar/${id}`);
  return res.data.data;
};

export default client;

