import { EyeIcon, PencilIcon } from '@heroicons/react/20/solid'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextGlobal } from '../../global/EstadoGlobal'

export default function CardTask({ tasks, name }) {

    const { tasksList, setTaskList } = useContext(ContextGlobal)
    const navigate = useNavigate()
    const styleCard = "flex w-full text-black items-center gap-2 mt-3 shadow-slate-700 shadow-inner h-auto p-2 rounded justify-around"

    const mudaStatus = (e, item) => {

        const findDay = tasksList.map((task) => {

            if (task.day === item.day) {

                const upDateStatus = task.tasks.map((status) => {
                    if (e) {
                        if (status.id === item.id) {
                            return { ...status, status: 'done' }
                        }
                    } else {
                        if (status.id === item.id) {
                            return { ...status, status: 'open' }
                        }
                    }
                    return status
                });

                return { ...task, tasks: upDateStatus };
            };
            return task
        });

        setTaskList(findDay)
    }

    return (
        <div className=" w-1/5 rounded bg-violet-600 text-white shadow-lg text-center m-2 p-2">
            <h1 className='flex w-full justify-between items-center'> 
                {name} <PencilIcon className="h-5 w-5 " aria-hidden="true" /></h1>
            <hr />

            {tasks.map((task, i) => <div key={i}
                className={task&&task.status === 'done' ?
                    `${styleCard} bg-green-400`
                    :
                    `${styleCard} bg-gray-200`}>
                        
                <input
                    type={'checkbox'}
                    checked={task.status === 'done' ? true : false}
                    onChange={(e) => mudaStatus(e.target.checked, task)}
                />
                <h5>{task.name}</h5>

                <button onClick={() => navigate(`/details/${task.day}/${task.id}`)}>
                    <EyeIcon className='w-5 text-violet-600' />
                </button>
            </div>)}




        </div >
    )
}