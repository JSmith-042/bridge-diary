import DateDisplaySelector from "./DateDisplaySelector";
import DiaryEntryDisplay from "./DiaryEntryDisplay";
import {useEffect, useState} from "react";
import {createEntry, getListOfEntries} from "../services/DiaryService";
import {DiaryEntry} from "../types/DiaryEntry";
import DiaryInputForm from "./DiaryInputForm";


const DiaryPage = () => {
    const emptyEntry: DiaryEntry = {id: -1, title: "", text: "", date: new Date("0000-00-00"), rating:0, awesomeness:0};
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

    const handleAdd = (formData:DiaryEntry) => {
        createEntry(formData).then((r)=>{setEntryList([...entryList, r])});
    }

    return (
        <>
            <div className="text-center"><h1>Welcome to your personal diary</h1></div>
            <DiaryInputForm onAdd={handleAdd}/>
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
                        text={selectedEntry.date.toString() != "Invalid Date" ? selectedEntry.text : ""}
                        rating={selectedEntry.date.toString() != "Invalid Date" ? selectedEntry.rating : 0}></DiaryEntryDisplay>
                </div>
            </div>
        </>
    )
};

export default DiaryPage;