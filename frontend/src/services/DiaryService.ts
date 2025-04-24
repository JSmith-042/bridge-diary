import axios from "axios";

export const getListOfEntries  = () => {
    const options = {
        method: 'GET',
        url: `/api/entries`,
        headers: {
            accept: 'application/json',
        }
    };

    return axios(options).then((r) => r.data)
}