import CardTask from "../../components/CardTask"
import InputAdd from "../../components/Input"
import { ArrowLeftOnRectangleIcon, CubeIcon } from '@heroicons/react/20/solid'
import { useContext } from "react"
import { ContextGlobal } from "../../global/EstadoGlobal"

export default function BoardTaskPage() {

    const { tasksList, navigate, isLoading } = useContext(ContextGlobal)

    return (
        <div className=" w-full overflow-x-auto flex flex-wrap bg-violet-300 p-3 min-h-screen items-start">

            <button onClick={()=>navigate("/")}>
                <ArrowLeftOnRectangleIcon className="w-10 text-violet-700" />
            </button>
            <InputAdd />

            {isLoading ? <div className="flex w-full h-auto justify-center ">
                carregando... <CubeIcon className="w-10 text-violet-700" /></div>
                :
                <div className="flex w-full h-auto">

                    {tasksList && tasksList.map((item, i) =>
                        <CardTask key={i} name={item.day} tasks={item.tasks} />)
                    }
                </div>}


        </div>
    )
}