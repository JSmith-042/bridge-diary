import {MouseEventHandler} from "react";

type DateDisplaySelectorProps =
    {
        dates:Date[],
        dateSelectHandler:MouseEventHandler<HTMLLIElement>
    }


const DateDisplaySelector = ({dates, dateSelectHandler}:DateDisplaySelectorProps) => {

    if (dates.length===0)
        return (<></>)

    dates = dates.map((el:Date) => (new Date(el.toString())));

    return (
        <div>
            <ol>
                {dates.map((el:Date, index) => (<li aria-label={index.toString()} key={index} onClick={dateSelectHandler} >{el.toLocaleDateString("en-US")}</li>))}
            </ol>
        </div>
    );
};

export default DateDisplaySelector;