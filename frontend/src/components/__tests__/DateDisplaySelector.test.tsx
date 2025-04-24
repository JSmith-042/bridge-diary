import {render, screen} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import DateDisplaySelector from "../DateDisplaySelector";

describe('Date Display Selector', ()=>
{
    it('should display list of dates given', () => {
        const testDatesList = [new Date("2025-03-05"), new Date("2025-03-06"), new Date("2025-03-07")];

        render(<DateDisplaySelector dates={testDatesList} dateSelectHandler={()=>{}}/>)

        const dateList = screen.getAllByRole("listitem");

        expect(dateList.length).toBe(3);
        expect(dateList[0].textContent).toBe(testDatesList[0].toLocaleDateString("en-us"))
    });
})