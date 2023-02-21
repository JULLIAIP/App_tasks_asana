import { PencilIcon, TrashIcon, ArrowLeftCircleIcon, CheckIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL_BASE, headers } from '../../global/api'
import { ContextGlobal } from '../../global/EstadoGlobal'

//style 
const styleDescription = 'w-1/2 p-2 border-l-violet-600 border-spacing-1 border-4 rounded-md h-auto'
const styletag = 'h-1/5 p-2 rounded flex items-center text-white'

export default function DetailsPage() {
    const { removeTask, navigate} = useContext(ContextGlobal)
    const { id } = useParams()

    const [showTask, setShowTask] = useState('')
    const [edit, setEdit] = useState(false)
    const [newDescription, setNewDescription] = useState("")

    const getDetailsTask = useCallback(() => {
        const buscar = {
            method: 'GET',
            url: `${URL_BASE}/tasks/${id}`,
            params: {
                assignee: '1202625368326187',
                workspace: '1202625372568274',
                opt_fields: 'date,gid,name,completed,notes,due_at, due_on'
            },
            headers, 
        }
        axios
            .request(buscar)
            .then((sucess) => { setShowTask(sucess.data.data) })
            .catch((erro) => { console.log(erro) })
    }, [])

    const editDescription = () => {

        // const updatedTaskList = tasksList.map(item => {
        //     if (item.day === day) {
        //         const updatedTasks = item.tasks.map(task => {
        //             if (task.gid === id) {
        //                 return { ...task, description: newDescription };
        //             }
        //             return task;
        //         });
        //         return { ...item, tasks: updatedTasks };
        //     }
        //     return item;
        // });
        // setTaskList(updatedTaskList);

        const options = {
            method: 'PUT',
            url: `https://app.asana.com/api/1.0/tasks/${id}`,
            headers: {
                accept: 'application/json',
                authorization: 'Bearer 1/1202625368326187:cd34e9f62a04d9ffc788f4d1b33af631'
            },
            data: { data: { notes: newDescription } }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });

        setEdit(!edit)
    }




    useEffect(() => {
        // const filterDay = tasksList.find(item => item.day === day);
        // if (filterDay) {
        //     const findTask = filterDay.tasks.find(task => task.id === id);
        //     if (findTask) {
        //         setShowTask(findTask);
        //     }
        // }
        getDetailsTask()
    }, [])

    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center bg-violet-300'>
            <button onClick={() => navigate("/board/")}><ArrowLeftCircleIcon className="h-10 w-10 text-violet-600" /></button>
            {/* tag status completed */}
            <div className='flex items-center'>
                <h1 className='font-semibold m-2 text-3xl'>
                    {showTask && showTask.name}</h1>
                <h5 className={showTask && showTask.completed ?
                    `bg-green-500 ${styletag}` :
                    `bg-red-500 ${styletag}`}>
                    {showTask.completed ? "Done" : "Open"} </h5>
            </div>

            <div className='w-1/2 flex justify-around bg-slate-200 h-52 rounded-lg p-4 shadow-lg'>
                {/* notes */}
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
                        <h5>{showTask && showTask.notes ?
                            showTask.notes
                            : "vazio"} </h5>
                    }

                    {edit ? <button onClick={editDescription}>
                        <CheckIcon className='w-5' /> </button> : null} </div>

                {/* button action */}
                <div className='grid'>

                    {/* button edit */}
                    <button onClick={() => setEdit(!edit)} >
                        <PencilIcon className="h-5 w-5 text-violet-600" aria-hidden="true" />
                    </button>

                    {/* button delete */}
                    <button onClick={() => removeTask(id)}>
                        <TrashIcon className="h-5 w- text-violet-600" aria-hidden="true" />
                    </button>
                </div>
            </div>

        </div >
    )
}