const DiaryInputForm = () => {
    return (
        <form className="max-w-sm mx-auto grid gap-4 mx:gap-6">
            <div className={"mx:grid-cols-6"}>
                <label role={"contentinfo"} aria-label={"titleLabel"}>Title:
                    <input type={"text"}
                           className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}/>
                </label>
                <label role={"contentinfo"} aria-label={"dateLabel"}>Date:
                    <input type={"date"}
                           className={"dark:[color-scheme:dark] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                           defaultValue={new Date().toLocaleDateString('en-CA')}
                    />
                </label>
            </div>
            <label role={"contentinfo"} aria-label={"entryLabel"}>Entry:
                <textarea
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50
                          rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
                          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                          dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // style={{resize:"none", height:"auto", sc}}
                ></textarea>
            </label>

            <button type="submit"
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"

            >Add Entry
            </button>
        </form>
    );
};

export default DiaryInputForm;