import {render, screen, waitFor} from '@testing-library/react'
import {describe, expect, it, vi} from "vitest";
import DiaryPage from "../DiaryPage";
import * as diaryService from "../../services/DiaryService";
import {DiaryEntry} from "../../types/DiaryEntry";
import {userEvent} from "@testing-library/user-event";

describe('Diary Page', () => {
    const doRender = async () => await waitFor(() => {
        render(<DiaryPage/>)
    })

    it('should display welcome header', async () => {
        vi.spyOn(diaryService, "getListOfEntries").mockResolvedValueOnce([])

        await doRender();

        const welcomeHeader = screen.getByRole("heading", {name: "Welcome to your personal diary"})

        expect(welcomeHeader).toBeVisible();
    });

    it('should display diary entry dates', async () => {
        const testEntries: DiaryEntry[] =
            [{id: 0, title: 'test1', text: "text1", date: new Date("2025-02-05")},
                {id: 1, title: 'test1', text: "other text here", date: new Date("2025-03-06")},
                {id: 2, title: 'test1', text: "more other text", date: new Date("2025-01-07")}];

        const getEntries = vi.spyOn(diaryService, "getListOfEntries").mockResolvedValueOnce(testEntries)
        await doRender();

        const dateList = await screen.findAllByRole("listitem");

        expect(getEntries).toHaveBeenCalledOnce();
        expect(dateList.length).toBe(3);
    });

    it('should display actual entry when selected from dates list', async () => {
        const testEntries: DiaryEntry[] =
            [{id: 0, title: 'test1', text: "text1", date: new Date("2025-02-05")},
                {id: 1, title: 'test1', text: "stuff i wanna say", date: new Date("2025-03-06")},
                {id: 2, title: 'test1', text: "more $hi+ here", date: new Date("2025-01-07")}];

        vi.spyOn(diaryService, "getListOfEntries").mockResolvedValueOnce(testEntries)
        await doRender();

        const secondDateItem = (await screen.findAllByRole("listitem"))[1];

        await userEvent.click(secondDateItem);

        const displayTitle = screen.getByRole("heading", {name: testEntries[1].title})
        expect(displayTitle).toBeVisible();
        expect(screen.getByText("stuff i wanna say")).toBeVisible();
    });


})