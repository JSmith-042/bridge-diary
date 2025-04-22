import {render, screen} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import DiaryInputForm from "../DiaryInputForm.tsx";

describe('Diary Input Form', ()=>
{
    it('should display "Title: " label with title input field', () => {
        render(<DiaryInputForm></DiaryInputForm>)

        const titleLabel = screen.getByRole('contentinfo', {name: "titleLabel"});
        const titleInput = screen.getByLabelText("Title:");


        expect(titleLabel).toBeVisible();
        expect(titleInput).toBeVisible();
    });

    it('should display "Date: " label with date picker input field with initial value of current date', () => {
        render(<DiaryInputForm></DiaryInputForm>)

        const dateLabel = screen.getByRole('contentinfo', {name: "dateLabel"})
        const dateInput = screen.getByLabelText("Date:");

        expect(dateLabel).toBeVisible();
        expect(dateInput).toBeVisible();

        expect(dateInput).toHaveValue(new Date().toLocaleDateString('en-CA'))
    });

    it('should display "Entry: " label with entry textarea input', () => {
        render(<DiaryInputForm></DiaryInputForm>)

        const entryLabel = screen.getByRole('contentinfo', {name: "entryLabel"});
        const entryInput = screen.getByLabelText("Entry:");


        expect(entryLabel).toBeVisible();
        expect(entryInput).toBeVisible();



    });

    it('should display Add Button', () => {
        render(<DiaryInputForm></DiaryInputForm>)

        const addButton = screen.getByRole("button", {name: "Add Entry"});

        expect(addButton).toBeVisible();
    });

})