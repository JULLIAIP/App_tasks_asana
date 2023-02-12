import { PencilIcon, TrashIcon, ArrowLeftCircleIcon, CheckIcon } from '@heroicons/react/20/solid'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ContextGlobal } from '../../global/EstadoGlobal'

export default function DetailsPage() {
    const { tasksList, setTaskList } = useContext(ContextGlobal)
    const navigate = useNavigate()
    const { day, id } = useParams()

    const styleDescription = 'w-1/2 p-2 border-l-violet-600 border-spacing-1 border-4 rounded-md h-auto'

    const [showTask, setShowTask] = useState('')
    const [edit, setEdit] = useState(false)
    const [newDescription, setNewDescription] = useState("")

    const removeTask = () => {

        const filterDay = tasksList.map((item) => {

            if (item.day === day) {

                const removeTask = item.tasks.filter((item) => item.id !== id)
                return { ...item, tasks: removeTask };
            }

            return item

        })
        setTaskList(filterDay)
        navigate("/board")

    }

    const editDescription = () => {

        const updatedTaskList = tasksList.map(item => {
            if (item.day === day) {
                const updatedTasks = item.tasks.map(task => {
                    if (task.id === id) {
                        return { ...task, description: newDescription };
                    }
                    return task;
                });
                return { ...item, tasks: updatedTasks };
            }
            return item;
        });
        setTaskList(updatedTaskList);
        setEdit(!edit)
    }


    //style
    const tagStyle = 'h-1/5 p-2 rounded flex items-center text-white'

    useEffect(() => {
        const filterDay = tasksList.find(item => item.day === day);
        if (filterDay) {
            const findTask = filterDay.tasks.find(task => task.id === id);
            if (findTask) {
                setShowTask(findTask);
            }
        }
    }, [tasksList])

    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center bg-violet-300'>
            <button onClick={() => navigate("/board/")}><ArrowLeftCircleIcon className="h-10 w-10 text-violet-600" /></button>

            <div className='flex items-center'>
                <h1 className='font-semibold m-2 text-3xl'>
                    {showTask && showTask.name}</h1>
                <h5 className={showTask && showTask.status === 'done' ?
                    `bg-green-500 ${tagStyle}` :
                    `bg-red-500 ${tagStyle}`}>
                    {showTask && showTask.status} </h5>
            </div>
            <div className='w-1/2 flex justify-around bg-slate-200 h-52 rounded-lg p-4 shadow-lg'>
                <div className={
                    edit ?
                        `${styleDescription}, bg-slate-300 border-spacing-4`
                        :
                        `${styleDescription}`
                }>
                    {edit ?
                        <textarea className='bg-transparent w-1/2'
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                        :
                        <h5>{showTask && showTask.description ?
                            showTask.description
                            : "vazio"} </h5>
                    }

                    {edit ? <button onClick={editDescription}>
                        <CheckIcon className='w-5' /> </button> : null} </div>


                <div className='grid'>
                    <button onClick={() => setEdit(!edit)} ><PencilIcon className="h-5 w-5 text-violet-600" aria-hidden="true" /></button>
                    <button onClick={() => removeTask()}><TrashIcon className="h-5 w- text-violet-600" aria-hidden="true" /></button>
                </div>
            </div>

        </div >
    )
}