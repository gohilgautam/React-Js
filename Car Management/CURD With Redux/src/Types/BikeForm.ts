export interface bikeForm {
    id: number;
    owner_name: string;
    contect_num: string;
    bike_brand: string;
    bike_model: string;
    registration_num: string;
    bike_type: string;
    address: string;
}

export interface bikeState {
    bikes: bikeForm[];
}
