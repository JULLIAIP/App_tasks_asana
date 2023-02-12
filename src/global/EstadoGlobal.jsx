import React, { Children, useState } from "react";
import uuid from "react-uuid";

export const ContextGlobal = React.createContext()

export const StateGblobal = ({ children }) => {

    const [tasksList, setTaskList] = useState([
        {
            day: "Segunda-Feira",
            tasks: []
        },
        {
            day: "Terça-Feira",
            tasks: []
        },
        {
            day: "Quarta-Feira",
            tasks: []
        },
        {
            day: "Quinta-Feira",
            tasks: []
        },
        {
            day: "Sexta-Feira",
            tasks: []
        },

    ])

    return (
        <ContextGlobal.Provider value={{ tasksList, setTaskList}}>
            {children}
        </ContextGlobal.Provider>
    )

}