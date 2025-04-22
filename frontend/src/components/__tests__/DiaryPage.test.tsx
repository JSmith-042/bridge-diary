import {render, screen} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import DiaryPage from "../DiaryPage";

describe('Diary Page', ()=>
{
    it('should display welcome header', () => {
        render(<DiaryPage/>)

        const welcomeHeader = screen.getByRole("heading", {name:"Welcome to your personal diary"})

        expect(welcomeHeader).toBeVisible();


    });
})