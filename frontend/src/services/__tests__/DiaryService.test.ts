import {setupServer} from "msw/node";
import {http, HttpResponse} from "msw";
import {getListOfEntries} from "../DiaryService";
import axios from "axios";
import {it, describe, expect, beforeAll, afterAll, afterEach} from "vitest";
import {DiaryEntry} from "../../types/DiaryEntry";

describe('DiaryService', () => {

    axios.defaults.baseURL = "http://localhost:8080/diary"

    const server = setupServer()
    beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())

    it('should send a get request to fetch existing diary entries', async () => {
        const expected: DiaryEntry[] = [
            {id: 1, title: "title 1", text: 'some entry', date: new Date("2025-01-01")},
            {id: 2, title: "title 2", text: 'another entry', date: new Date("2025-01-02")},
            {id: 3, title: "title 3", text: 'and the third entry', date: new Date("2025-01-03")},
        ];

        server.use(http.get('http://localhost:8080/diary/getAll', () =>
            HttpResponse.json(expected, {status: 200})
        ))

        expect(await getListOfEntries()).toStrictEqual(JSON.parse(JSON.stringify(expected)));
    });
});