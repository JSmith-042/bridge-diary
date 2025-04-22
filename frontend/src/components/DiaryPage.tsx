import DateDisplaySelector from "./DateDisplaySelector";
import DiaryEntryDisplay from "./DiaryEntryDisplay";

const DiaryPage = () => {
    return (
        <>
            <div className="text-center"><h1>Welcome to your personal diary</h1></div>
            <div className={"grid grid-flow-col gap-4"}>
                <div className="col-span-1 row-span-full h-screen">
                    <DateDisplaySelector></DateDisplaySelector>
                </div>
                <div className="col-span-2 row-span-full">
                    <DiaryEntryDisplay title={""} text={""}></DiaryEntryDisplay>
                </div>
            </div>
        </>
    )
};

export default DiaryPage;