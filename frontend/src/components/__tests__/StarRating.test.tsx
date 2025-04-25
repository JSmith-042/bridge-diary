import {render, screen} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import StarRating from "../StarRating";
import {userEvent} from "@testing-library/user-event";

describe('Star Rating', () => {
    const isActive ="text-yellow-300";
    const isDeactive = "text-gray-300"

    it('should display empty stars', () => {
        render(<StarRating rating={0}></StarRating>)

        const starDisplay = screen.getAllByRole("img");

        starDisplay.forEach((el)=>{expect(el.getAttribute("class")).toContain(isDeactive)})
    });
    
    it('should display five stars', () => {
        render(<StarRating rating={5}/>)

        const starDisplay = screen.getAllByRole("img");

        starDisplay.forEach((el)=>{expect(el.getAttribute("class")).toContain(isActive)})
    });

    it('should change number of stars when star is clicked', async () => {
        render(<StarRating rating={0}/>)

        const starDisplay = screen.getAllByRole("img");

        await userEvent.click(starDisplay[2].children[0]);

        expect(starDisplay[0]).toHaveClass(isActive);
        expect(starDisplay[1]).toHaveClass(isActive);
        expect(starDisplay[2]).toHaveClass(isActive);

    });
})


