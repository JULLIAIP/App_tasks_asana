import { EyeIcon, PencilIcon } from '@heroicons/react/20/solid'
import { useContext } from 'react'
import { instanceAxios } from '../../global/api'
import { ContextGlobal } from '../../global/EstadoGlobal'

//style
const styleCard = "flex w-full text-black items-center gap-2 mt-3 shadow-slate-700 shadow-inner h-auto p-2 rounded justify-around"

export default function CardTask({ tasks, name }) {

    const { navigate } = useContext(ContextGlobal)

    const mudaStatus = (e, item) => {
        //SEM API   
        /* const findDay = tasksList&&tasksList.map((task) => {
  
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
          }
          );*/


        //COM API
        const data = {
            data:
                { completed: e }
        };

        instanceAxios.put(`/tasks/${item.gid}`, data)

            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    return (
        <div className=" w-1/5 rounded bg-violet-600 text-white shadow-lg text-center m-2 p-2">
            <h1 className='flex w-full justify-center items-center'>
                {name}</h1>
            <hr />

            {tasks.map((task, i) => <div key={i}
                className={task && task.completed ?
                    `${styleCard} bg-green-400`
                    :
                    `${styleCard} bg-gray-200`}>

                <input
                    type={'checkbox'}
                    checked={task.completed ? true : false}
                    onChange={(e) => mudaStatus(e.target.checked, task)}
                />
                <h5>{task.name}</h5>
                {/* removi o /day */}
                <button onClick={() => navigate(`/details/${task.gid}`)}>
                    <EyeIcon className='w-5 text-violet-600' />
                </button>
            </div>)}




        </div >
    )
}