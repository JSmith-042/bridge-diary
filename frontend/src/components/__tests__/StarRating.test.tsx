import {render, screen, waitFor} from '@testing-library/react'
import {describe, expect, it, vi} from "vitest";
import StarRating from "../StarRating";

describe('Star Rating', () => {
    it('should display empty stars', () => {
        render(<StarRating rating={0}></StarRating>)

        // expect(screen.queryAllByRole("img", {name: "/filled/i"}))
        const starDisplay = screen.getAllByRole("img");

        starDisplay.forEach(())
    });

    it('should display five stars', () => {
        render(<StarRating rating={5}/>)

        const starDisplay = screen.getAllByRole("img");
    });

})