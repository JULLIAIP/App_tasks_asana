export default function CardTask(props) {


    return (
        <div className=" w-1/5 rounded bg-gray-400 shadow-lg text-center m-2 p-2">
            {props.name}
            <hr />
            <div className="
            flex w-full items-center gap-2 mt-3 shadow-slate-700 shadow-inner h-auto
            bg-amber-400 p-2 rounded justify-around">
                <input type={'checkbox'} /> <h5>Task name</h5>
            </div>



        </div >
    )
}