export default function InputAdd() {
    return (

        <div className=" flex  m-auto mt-4 rounded-md shadow-sm w-1/3 bg-lime-500 h-1/5" >
            <input
                type="text"
                name="new-task"
                id="task"
                className="block w-2/3 rounded-md border-gray-300 pl-7 pr-12 focus:border-none focus:ring-indigo-500 sm:text-sm"
                placeholder="New Taks"
            />
            <button className="w-1/3 text-white rounded-md">Add</button>
        </div>


    )
}