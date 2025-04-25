import axios from "axios";
import {DiaryEntry} from "../types/DiaryEntry";

export const getListOfEntries = () => {
    const options = {
        method: 'GET',
        url: `/api/entries`,
        headers: {
            accept: 'application/json',
        }
    };

    return axios(options).then((r) => r.data)
}

export const getEntry = (id: number) => {
    const options = {
        method: 'GET',
        url: `/api/entry/${id}`,
        headers: {
            accept: 'application/json',
        }
    };

    return axios(options).then((r) => r.data)
}

export const createEntry = (newEntry: DiaryEntry) => {
    const options = {
        method: 'POST',
        url: `http://localhost:8080/api/entry`,
        headers: {
            accept: 'application/json',
        },
        data: {
            id: newEntry.id,
            title: newEntry.title,
            text: newEntry.text,
            rating: newEntry.rating,
            awesomeness: newEntry.awesomeness,
            date: newEntry.date.getTime() / 1000
        }
    };

    return axios(options).then((r) => r.data)
}

