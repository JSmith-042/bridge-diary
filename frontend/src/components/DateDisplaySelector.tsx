type DateDisplaySelectorProps =
    {
        dates:Date[]
    }

const DateDisplaySelector = ({dates}:DateDisplaySelectorProps) => {
    return (
        <div>
            <ol>
                {dates.map((el:Date, index) => (<li key={index}>{el.toLocaleDateString()}</li>))}
            </ol>
        </div>
    );
};

export default DateDisplaySelector;