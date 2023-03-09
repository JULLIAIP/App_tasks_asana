import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAsanaRequest from "../hooks/useAsanaRequest";
import { instanceAxios } from "./api";

export const ContextGlobal = React.createContext()

export const StateGblobal = ({ children }) => {

    const navigate = useNavigate()
    const [tasksList, setTaskList] = useState([])

    //Use the customHook
    const [response, isLoading] = useAsanaRequest({
        axiosInstance: instanceAxios,
        method: 'get',
        path: '/tasks',
        param: {
            params: {
                assignee: '1202625368326187',
                workspace: '1202625372568274',
                opt_fields: 'date,gid,name,completed,notes,due_at, due_on'
            }
        },
        data: {},
    })

    //Agrupando as tasks por dia
    function groupByDayOfWeek() {

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

        const result = response && response.data && response.data.data.reduce((acc, item) => {

            const dueOn = item.due_on;
            if (dueOn) {
                const dayOfWeek = new Date(dueOn).toLocaleDateString('en-US', { weekday: "long", timeZone: 'UTC' });
                acc[dayOfWeek].push(item);
            }

            return acc;
        }, daysOfWeek);


        // usando desistruturação para modelar o objeto
        const daysOfWeekArr = Object.entries(result).map(([day, tasks]) => {
            return {
                day,
                tasks,
            };
        });

        return setTaskList(daysOfWeekArr);
    }
    //SEM CUSTOM HOOKS
    // const getData = useCallback(() => {

    //     const params = {
    //         params: {
    //             assignee: '1202625368326187',
    //             workspace: '1202625372568274',
    //             opt_fields: 'date,gid,name,completed,notes,due_at, due_on'
    //         }
    //     }
    //     instanceAxios.get('/tasks', params)

    //         .then((sucess) => { groupByDayOfWeek(sucess.data.data) })
    //         .catch((erro) => { console.log(erro) })
    // }, [])

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

        instanceAxios.delete(`/tasks/${id}`)
            .then(() => { alert('Task Removida com sucesso') ;  location.reload(true) })
            .catch((erro) => { console.log(erro) })

        navigate("/board")

    }

    useEffect(() => {
        //previne erro de carregamento 
        { !isLoading ? groupByDayOfWeek() : null }
    }, [isLoading])

    return (
        <ContextGlobal.Provider value={{ tasksList, setTaskList, removeTask, navigate, response, isLoading }}>
            {children}
        </ContextGlobal.Provider>
    )

}