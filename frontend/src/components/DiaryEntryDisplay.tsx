import StarRating from "./StarRating";

type DiaryEntryProps =
    {
        title: string,
        text: string
    }

const DiaryEntryDisplay = ({title, text}:DiaryEntryProps) => {
    return (
        <div>
            <StarRating rating={3}></StarRating>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default DiaryEntryDisplay;