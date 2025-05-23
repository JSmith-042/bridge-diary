import DateDisplaySelector from "./DateDisplaySelector";
import DiaryEntryDisplay from "./DiaryEntryDisplay";
import {useEffect, useState} from "react";
import {getListOfEntries} from "../services/DiaryService";
import {DiaryEntry} from "../types/DiaryEntry";
import StarRating from "./StarRating";


const DiaryPage = () => {
    const emptyEntry: DiaryEntry = {id: -1, title: "", text: "", date: new Date("0000-00-00")};
    const [entryList, setEntryList] = useState([emptyEntry])
    const [selectedEntry, setSelectedEntry] = useState(emptyEntry)

    useEffect(() => {
        getListOfEntries().then((r: DiaryEntry[]) => {
            setEntryList(r)
        })
    }, []);

    const handleDateSelect = (e) => {
        const liElement = e.target as HTMLLIElement

        if (liElement.ariaLabel != null)
            setSelectedEntry(entryList[+liElement.ariaLabel]);
    }

    return (
        <>

            <StarRating rating={3}></StarRating>
            <div className="text-center"><h1>Welcome to your personal diary</h1></div>
            <div className={"grid grid-flow-col gap-4"}>
                <div className="col-span-1 row-span-full h-screen">
                    <DateDisplaySelector
                        dateSelectHandler={handleDateSelect}
                        dates={entryList.filter((entry: DiaryEntry) => (
                            entry.date.toString() != "Invalid Date")).map((entry: DiaryEntry) => (entry.date))}></DateDisplaySelector>
                </div>
                <div className="col-span-2 row-span-full">
                    <DiaryEntryDisplay
                        title={selectedEntry.date.toString() != "Invalid Date" ? selectedEntry.title : ""}
                        text={selectedEntry.date.toString() != "Invalid Date" ? selectedEntry.text : ""}></DiaryEntryDisplay>
                </div>
            </div>
        </>
    )
};

export default DiaryPage;