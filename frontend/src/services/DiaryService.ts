import axios from "axios";

export const getListOfEntries  = () => {
    const options = {
        method: 'GET',
        url: `http://localhost:8080/diary/getAll`,
        headers: {
            accept: 'application/json',
        }
    };

    return axios(options).then((r) => r.data)
}