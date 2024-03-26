"use client"
import React from "react";
import { createContext, useState } from "react";
import dayjs from "dayjs";

interface IAppContext {
    firstDayDate: dayjs.Dayjs,
    currentMonthName: string,
    currentYear: string,
    monthIdx: number,
    setDateToDisplay: (data: dayjs.Dayjs) => void,
    setCurrentMonthIdx: (index: number) => void,
}

export const AppContext = createContext<IAppContext | null>(null);

const AppContextProvider = ({ children } : { children: React.ReactNode}) => {
    const initDate = dayjs();
    const [date, setDate] = useState(initDate);
    const [monthIdx, setMonthIdx] = useState(dayjs().month());


    const setDateToDisplay = (date: dayjs.Dayjs) => {
        setDate(date);
    }

    const setCurrentMonthIdx = (index: number) => {
        setMonthIdx((prev) =>  prev + index);
    }


    const context = {
        firstDayDate: date,
        currentMonthName : date.format("MMMM"),
        currentYear: date.format("YYYY"),
        monthIdx: monthIdx,
        setDateToDisplay: setDateToDisplay,
        setCurrentMonthIdx: setCurrentMonthIdx,
    }


    return(
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;