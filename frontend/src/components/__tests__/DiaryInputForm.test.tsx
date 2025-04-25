import {render, screen} from '@testing-library/react'
import {describe, expect, it, vi} from "vitest";
import DiaryInputForm from "../DiaryInputForm.tsx";
import {DiaryEntry} from "../../types/DiaryEntry";
import {userEvent} from "@testing-library/user-event";

describe('Diary Input Form', ()=>
{
    it('should display "Title: " label with title input field', () => {
        render(<DiaryInputForm onAdd={()=>{}}></DiaryInputForm>)

        const titleLabel = screen.getByRole('contentinfo', {name: "titleLabel"});
        const titleInput = screen.getByLabelText("Title:");


        expect(titleLabel).toBeVisible();
        expect(titleInput).toBeVisible();
    });

    it('should display "Date: " label with date picker input field with initial value of current date', () => {
        render(<DiaryInputForm onAdd={()=>{}}></DiaryInputForm>)

        const dateLabel = screen.getByRole('contentinfo', {name: "dateLabel"})
        const dateInput = screen.getByLabelText("Date:");

        expect(dateLabel).toBeVisible();
        expect(dateInput).toBeVisible();

        expect(dateInput).toHaveValue(new Date().toLocaleDateString('en-CA'))
    });

    it('should display "Entry: " label with entry textarea input', () => {
        render(<DiaryInputForm onAdd={()=>{}}></DiaryInputForm>)

        const entryLabel = screen.getByRole('contentinfo', {name: "entryLabel"});
        const entryInput = screen.getByLabelText("Entry:");


        expect(entryLabel).toBeVisible();
        expect(entryInput).toBeVisible();



    });

    it('should display Add Button', () => {
        render(<DiaryInputForm onAdd={()=>{}}></DiaryInputForm>)

        const addButton = screen.getByRole("button", {name: "Add Entry"});

        expect(addButton).toBeVisible();
    });

    it('should trigger supplied add function with form data when add is clicked', async () => {
        const mockEventHandler = vi.fn();
        const newEntry:DiaryEntry = {id: null, title: "test title", date: new Date("2025-04-20"), text: "my entry", awesomeness: 0, rating: 0}

       render(<DiaryInputForm onAdd={mockEventHandler}/>)

        const addButton = screen.getByRole("button", {name: "Add Entry"});
        const titleInput = screen.getByLabelText("Title:");
        const dateInput = screen.getByLabelText("Date:");
        const textInput = screen.getByLabelText("Entry:");


        await userEvent.type(titleInput, "test title");
        await userEvent.type(textInput, "my entry")
        await userEvent.clear(dateInput);
        await userEvent.type(dateInput, "2025-04-19");

        await userEvent.click(addButton);


        expect(mockEventHandler).toHaveBeenCalledExactlyOnceWith(newEntry);
    });

})