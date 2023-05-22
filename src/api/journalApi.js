import axios from "axios";

const journalApi = axios.create({
    baseURL: 'http://localhost:3000/api/day'
})

export default journalApi;
