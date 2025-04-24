import {useState} from "react";

type StarRatingProps = {
    rating: number
}

const StarRating = ({rating}:StarRatingProps) => {
    const [stars, setStars] = useState(rating)

    const starPath = <path
        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>

    const filledClass:string = "w-4 h-4 text-yellow-300 ms-1";

    const emptyClass:string = "w-4 h-4 ms-1 text-gray-300 dark:text-gray-500";

    return (
        <>
            <div className="flex items-center">
                <svg role={"img"} className={stars >= 1 ? filledClass : emptyClass} xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" viewBox="0 0 22 20">
                    {starPath}
                </svg>
                <svg role={"img"} className={stars >= 2 ? filledClass : emptyClass} xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" viewBox="0 0 22 20">
                    {starPath}
                </svg>
                <svg role={"img"} className={stars >= 3 ? filledClass : emptyClass} xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" viewBox="0 0 22 20">
                    {starPath}
                </svg>
                <svg role={"img"} className={stars >= 4 ? filledClass : emptyClass} xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" viewBox="0 0 22 20" >
                    {starPath}
                </svg>
                <svg role={"img"} className={stars >= 5 ? filledClass : emptyClass}
                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    {starPath}
                </svg>
            </div>
        </>
    );
};

export default StarRating;