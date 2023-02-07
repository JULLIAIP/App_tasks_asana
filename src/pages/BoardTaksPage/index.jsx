import CardTask from "../../components/CardTask"
import InputAdd from "../../components/Input"
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'
import { useNavigate } from "react-router-dom"

export default function BoardTaskPage() {
    const days = [
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
    ]
    const navigate = useNavigate()
    return (
        <div className=" flex flex-wrap bg-violet-300 p-3 min-h-screen items-start">

            <button onClick={() => navigate("/")}> 
            <ArrowLeftOnRectangleIcon className="w-10 text-violet-700" />
            </button>
            <InputAdd />
            <div className="flex w-full h-auto">
                {days && days.map((item, i) => <CardTask key={i} name={item} />)}
            </div>
        </div>
    )
}