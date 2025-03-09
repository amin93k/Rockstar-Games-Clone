import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    timeout: 5000,
    params: {
        key: '85e1458a1b44485dad84871f7036cc90'
    }
})