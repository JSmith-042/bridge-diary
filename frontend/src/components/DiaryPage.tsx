import DateDisplaySelector from "./DateDisplaySelector";
import DiaryEntryDisplay from "./DiaryEntryDisplay";
import {useEffect, useState} from "react";
import {getListOfEntries} from "../services/DiaryService";
import {DiaryEntry} from "../types/DiaryEntry";


const DiaryPage = () => {
    const [entryList, setEntryList] = useState([{id:-1, title:"", text:"", date: new Date("0000-00-00")}])

    useEffect(() => {
        getListOfEntries().then((r:DiaryEntry[])=>{})
    }, []);

    return (
        <>
            <div className="text-center"><h1>Welcome to your personal diary</h1></div>
            <div className={"grid grid-flow-col gap-4"}>
                <div className="col-span-1 row-span-full h-screen">
                    <DateDisplaySelector dates={entryList.filter((entry:DiaryEntry) => (entry.date)).map((entry:DiaryEntry)=>(entry.date))}></DateDisplaySelector>
                </div>
                <div className="col-span-2 row-span-full">
                    <DiaryEntryDisplay title={""} text={""}></DiaryEntryDisplay>
                </div>
            </div>
        </>
    )
};

export default DiaryPage;