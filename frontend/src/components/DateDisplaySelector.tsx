import {MouseEventHandler} from "react";

type DateDisplaySelectorProps =
    {
        dates:Date[],
        dateSelectHandler:MouseEventHandler<HTMLLIElement>
    }

const DateDisplaySelector = ({dates, dateSelectHandler}:DateDisplaySelectorProps) => {
    return (
        <div>
            <ol>
                {dates.map((el:Date, index) => (<li aria-label={index.toString()} key={index} onClick={dateSelectHandler} >{el.toLocaleDateString()}</li>))}
            </ol>
        </div>
    );
};

export default DateDisplaySelector;