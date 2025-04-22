import {render, screen} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import DiaryEntryDisplay from "../DiaryEntryDisplay";

describe('Diary Entry Display', ()=>
{
    it('should show entry title', () => {
        const testTitle = "this is the title"
        render(<DiaryEntryDisplay title={testTitle} text={"around"}/>)

        const displayTitle = screen.getByRole("heading", {name: testTitle})

        expect(displayTitle).toBeVisible();
        
    });

    it('should show entry text', () => {
        const testText = "Today I ate a sammi";
        render(<DiaryEntryDisplay title={"the Title"} text={testText}/>)

        const displayText = screen.getByRole("paragraph");

        expect(displayText.textContent).toBe(testText)

    });
})