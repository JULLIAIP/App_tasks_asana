import { PencilIcon, TrashIcon, ArrowLeftCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DetailsPage() {
    const tagStyle = 'h-1/5 p-2 rounded flex items-center text-white'
    const navigate = useNavigate()

    const [status, setStatus] = useState('done')
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center bg-violet-300'>
            <button onClick={() => navigate("/board/")}><ArrowLeftCircleIcon className="h-10 w-10 text-violet-500" /></button>
            <div className='flex items-center'>
                <h1 className='font-semibold m-2 text-3xl'>Nome da task</h1>
                <h5 className={status === 'done' ? `bg-green-500 ${tagStyle}` : `bg-red-500 ${tagStyle}`}>
                    Status </h5>
            </div>
            <div className='w-1/2 flex justify-around bg-slate-200 h-52 rounded-lg p-4 shadow-lg'>
                <h5 className='w-1/2 p-2 border-l-purple-300 border-spacing-1 border-4 rounded-md h-auto'>
                    Descrição </h5>

                <div className='grid'>
                    <button><PencilIcon className="h-5 w-5 text-violet-500" aria-hidden="true" /></button>
                    <button><TrashIcon className="h-5 w- text-violet-500" aria-hidden="true" /></button>
                </div>
            </div>

        </div >
    )
}