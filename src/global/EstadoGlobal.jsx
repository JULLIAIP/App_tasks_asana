import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_BASE, headers } from "./api";

export const ContextGlobal = React.createContext()

export const StateGblobal = ({ children }) => {

    const [tasksList, setTaskList] = useState([])
    const [tags, setTags] = useState([''])
    const navigate = useNavigate()

    function groupByDayOfWeek(arr) {
        // inicializa um objeto vazio com as chaves correspondentes aos dias da semana
        const daysOfWeek = {
            Sunday: [],
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
        };

        // itera sobre o array de objetos, agrupando-os pelo dia da semana

        const result = arr.reduce((acc, item) => {

            const dueOn = item.due_on;

            if (dueOn) {
                const dayOfWeek = new Date(dueOn).toLocaleDateString('en-US', { weekday: "long" });
                acc[dayOfWeek].push(item);
            }

            return acc;
        }, daysOfWeek);


        // converte o objeto em um array de objetos
        const daysOfWeekArr = Object.entries(result).map(([day, tasks]) => {
            return {
                day,
                tasks,
            };
        });

        return setTaskList(daysOfWeekArr);
    }

    const getData = useCallback(() => {
        const buscar = {
            method: 'GET',
            url: `${URL_BASE}/tasks`,
            params: {
                assignee: '1202625368326187',
                workspace: '1202625372568274',
                opt_fields: 'date,gid,name,completed,notes,due_at, due_on'
            },
            headers
        }
        axios
            .request(buscar)
            .then((sucess) => { groupByDayOfWeek(sucess.data.data) })
            .catch((erro) => { console.log(erro) })
    }, [])

    const removeTask = (id) => {

        //----------------ANTES DE USAR A API
        // const filterDay = tasksList.map((item) => {

        //     if (item.day === day) {

        //         const removeTask = item.tasks.filter((item) => item.id !== id)
        //         return { ...item, tasks: removeTask };
        //     }

        //     return item

        // })
        // setTaskList(filterDay)


        //---------------COM API
        const delTask = {
            method: 'DELETE',
            url: `https://app.asana.com/api/1.0/tasks/${id}`,
            headers
        }
        axios
            .request(delTask)
            .then(() => { alert('Task Removida com sucesso') })
            .catch((erro) => { console.log(erro) })

        navigate("/board")

    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <ContextGlobal.Provider value={{ tasksList, setTaskList, removeTask, navigate, tags }}>
            {children}
        </ContextGlobal.Provider>
    )

}