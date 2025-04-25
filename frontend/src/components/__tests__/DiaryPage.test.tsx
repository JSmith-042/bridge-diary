import {render, screen, waitFor} from '@testing-library/react'
import {describe, expect, it, vi} from "vitest";
import DiaryPage from "../DiaryPage";
import * as diaryService from "../../services/DiaryService";
import {DiaryEntry} from "../../types/DiaryEntry";
import {userEvent} from "@testing-library/user-event";
import DiaryInputForm from "../DiaryInputForm";

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
            [{id: 0, title: 'test1', text: "text1", date: new Date("2025-02-05"), rating:0, awesomeness:0},
                {id: 1, title: 'test1', text: "other text here", date: new Date("2025-03-06"), rating:0, awesomeness:0},
                {id: 2, title: 'test1', text: "more other text", date: new Date("2025-01-07"), rating:0, awesomeness:0}];

        const getEntries = vi.spyOn(diaryService, "getListOfEntries").mockResolvedValueOnce(testEntries)
        await doRender();

        const dateList = await screen.findAllByRole("listitem");

        expect(getEntries).toHaveBeenCalledOnce();
        expect(dateList.length).toBe(3);
    });

    it('should display actual entry when selected from dates list', async () => {
        const testEntries: DiaryEntry[] =
            [{id: 0, title: 'test1', text: "text1", date: new Date("2025-02-05"), rating:0, awesomeness:0},
                {id: 1, title: 'test1', text: "stuff i wanna say", date: new Date("2025-03-06"), rating:0, awesomeness:0},
                {id: 2, title: 'test1', text: "more $hi+ here", date: new Date("2025-01-07"), rating:0, awesomeness:0}];

        vi.spyOn(diaryService, "getListOfEntries").mockResolvedValueOnce(testEntries)
        await doRender();

        const secondDateItem = (await screen.findAllByRole("listitem"))[1];

        await userEvent.click(secondDateItem);

        const displayTitle = screen.getByRole("heading", {name: testEntries[1].title})
        expect(displayTitle).toBeVisible();
        expect(screen.getByText("stuff i wanna say")).toBeVisible();
    });

    it('should display added entry when input form submitted', async () => {
        const newEntry:DiaryEntry = {id: 1, title: "test title", date: new Date("2025-04-20"), text: "my entry", awesomeness: 0, rating: 0}
        const newEntryWithNoId:DiaryEntry = {id: null, title: "test title", date: new Date("2025-04-20"), text: "my entry", awesomeness: 0, rating: 0}
        const mockService = vi.spyOn(diaryService, "createEntry").mockResolvedValueOnce(newEntry);

        render(<DiaryPage/>)

        const addButton = screen.getByRole("button", {name: "Add Entry"});
        const titleInput = screen.getByLabelText("Title:");
        const dateInput = screen.getByLabelText("Date:");
        const textInput = screen.getByLabelText("Entry:");

        await userEvent.type(titleInput, "test title");
        await userEvent.type(textInput, "my entry")
        await userEvent.clear(dateInput);
        await userEvent.type(dateInput, "2025-04-19");

        await userEvent.click(addButton);

        expect(mockService).toHaveBeenCalledExactlyOnceWith(newEntryWithNoId);
    });


})