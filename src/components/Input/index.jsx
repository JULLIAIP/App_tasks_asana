import { useContext, useEffect, useState } from "react"
import uuid from "react-uuid"
import { ContextGlobal } from "../../global/EstadoGlobal"

export default function InputAdd() {
    const { tasksList, setTaskList } = useContext(ContextGlobal)

    const [taskName, setTaskName] = useState('')
    const [dayTask, setDayTask] = useState('')


    function addTask() {

        const updatedDays = tasksList.map(task => {
            if (task.day === dayTask) {
                return {
                    ...task,
                    tasks: [
                        ...task.tasks,
                        { id: uuid(), name: taskName, status: 'open', 
                        description: '', day: dayTask }
                    ]
                };
            }
            return task;
        });
        setTaskList(updatedDays);
        setTaskName('')
        setDayTask('')
    }



    return (
        <div className=" flex m-auto mt-4 rounded-md 
        shadow-sm w-auto h-1/5 gap-2" >
            <input
                value={taskName}
                type="text"
                name="new-task"
                id="task"
                className="block w-auto rounded-md border-gray-300 pl-7 pr-12 focus:border-none
                 focus:ring-indigo-500 sm:text-sm"
                placeholder="New Taks"
                onChange={(e) => setTaskName(e.target.value)}
            />
            <select
                name="day"
                value={dayTask}
                className="border-none rounded sm:text-sm"
                onChange={(e) => setDayTask(e.target.value)}>
                {tasksList && tasksList.map((item, i) => 
                <option key={i}>{item.day}</option>)}
            </select>
            <button onClick={() => addTask()}
                className="w-10 text-white rounded-md bg-green-400">Add</button>
        </div>


    )
}