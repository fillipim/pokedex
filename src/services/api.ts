import axios from "axios";
import { baseUrl } from "../constants/endpoints";

export const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-type": "application/json"
    }
})