import CardTask from "../../components/CardTask"
import InputAdd from "../../components/Input"

export default function BoardTaskPage() {
    const days = [
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
    ]

    return (
        <div className=" flex flex-wrap bg-violet-300 p-3 min-h-screen items-start">
            <InputAdd/>

            <div className="flex w-full h-auto">
                {days && days.map((item, i) => <CardTask key={i} name={item} />)}
            </div>
        </div>
    )
}