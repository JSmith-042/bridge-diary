import StarRating from "./StarRating";

type DiaryEntryProps =
    {
        title: string,
        text: string,
        rating: number
    }

const DiaryEntryDisplay = ({title, text, rating}:DiaryEntryProps) => {
    return (
        <div>
            <StarRating rating={rating}></StarRating>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default DiaryEntryDisplay;