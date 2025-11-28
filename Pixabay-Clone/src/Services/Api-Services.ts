import axios from 'axios';

const API_KEY = '50590217-feeeb4c32d8c33c26d78d750c';
const BASE_URL = 'https://pixabay.com/api/';

export interface FilterOptions {
    image_type?: string;
    orientation?: string;
    min_width?: number;
    min_height?: number;
    colors?: string;
    order?: string;
    category?: string;
}

export const fetchImages = async (query: string = '', page: number = 1, options: FilterOptions = {}) => {
    try {
        const params: any = {
            key: API_KEY,
            q: query,
            page: page,
            per_page: 20,
            safesearch: true,
            ...options,
        };

        // Remove undefined or empty params
        Object.keys(params).forEach(key => {
            if (params[key] === undefined || params[key] === '' || params[key] === 'all') {
                delete params[key];
            }
        });

        const response = await axios.get(BASE_URL, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
};

export const fetchImageById = async (id: string) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                id: id,
            },
        });
        return response.data.hits[0];
    } catch (error) {
        console.error('Error fetching image details:', error);
        throw error;
    }
};