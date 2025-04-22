type DiaryEntryProps =
    {
        title: string,
        text: string
    }

const DiaryEntryDisplay = ({title, text}:DiaryEntryProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default DiaryEntryDisplay;