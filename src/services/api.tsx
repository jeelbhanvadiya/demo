import axios from "axios";

const BASE_URL = 'https://api.quotable.io';

export const getQuoteList = async (page) => {
    try {
        const result = await axios.get(`${BASE_URL}/quotes?page=${page}&limit=3`);
        return result?.data?.results || []
    } catch (e) {
        console.log(e);
        return [];
    }
};