import { useState } from "react"
import { instanceAxios } from "../../global/api";


export default function InputAdd() {
    const [taskName, setTaskName] = useState('')
    const [dayTask, setDayTask] = useState('')

    function addTask() {
        //--------SEM API
        // const updatedDays = tasksList.map(task => {
        //     if (task.day === dayTask) {
        //         return {
        //             ...task,
        //             tasks: [
        //                 ...task.tasks,
        //                 { id: uuid(), name: taskName, status: 'open', 
        //                 description: '', day: dayTask }
        //             ]
        //         };
        //     }
        //     return task;
        // });
        // setTaskList(updatedDays);

        //------------COM API

        const data = {
            data: {
                name: taskName,
                completed: false,
                due_on: dayTask,
                notes: '',
                assignee: '1202625368326187',
                workspace: '1202625372568274'
            }
        }


        instanceAxios.post(`/tasks`, data)

            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error.response.data);
            });


        //COM CUSTOMHOOK



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
            <input type={'date'} onChange={(e) => setDayTask(e.target.value)} />
            <button onClick={() => addTask()}
                className="w-10 text-white rounded-md bg-green-400">Add</button>
        </div>


    )
}