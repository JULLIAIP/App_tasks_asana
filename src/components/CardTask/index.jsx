import { EyeIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'
export default function CardTask(props) {

    const navigate = useNavigate()


    return (
        <div className=" w-1/5 rounded bg-gray-400 shadow-lg text-center m-2 p-2">
            {props.name}
            <hr />
            <div className="
            flex w-full items-center gap-2 mt-3 shadow-slate-700 shadow-inner h-auto
            bg-gray-200 p-2 rounded justify-around">
                <input type={'checkbox'} />
                <h5>Task name</h5>
                <button onClick={() => navigate('/details/1')}><EyeIcon className='w-5 text-violet-600' /></button>
            </div>



        </div >
    )
}