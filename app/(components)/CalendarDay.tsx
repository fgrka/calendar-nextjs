"use client"
import { useContext, useEffect } from "react";
import Link from "next/link"; 
import { Card, Typography, Box } from "@mui/material";
import TaskList from "./TaskList";
import dayjs from "dayjs";
import { useState } from "react";
import { AppContext } from "../(context)/context";

const CalendarDay = ({dateInfo, index}) => {
    const { monthIdx } = useContext(AppContext);
    const [isDayActive, setDayActive] = useState<boolean>(false);
    const dayNum = dateInfo.format("DD");
    const dayName = dateInfo.format("ddd");
    const cardHeigth = "10rem";
    const activeDay = dayjs().isSame(dateInfo, "day") ? "#1976d2" : "white";

    useEffect(() => {
        let currentMonth;
        if (monthIdx >= 12) {
         currentMonth = monthIdx-(Math.floor(monthIdx/12)*12);
        }
        else currentMonth = monthIdx;
        const isDayFromPrevMonth = dateInfo.month() !== currentMonth;
        setDayActive(isDayFromPrevMonth);
    }, [dateInfo])

    return (
        <Card square sx={{ display:"flex", position:"relative", justifyContent:"start", flexDirection:"column", alignItems:"left", height:cardHeigth, width:"8rem", padding:"0.5rem", borderBottom:"solid lightgray 1px", borderRight:"solid lightgray 1px", boxShadow:"none", filter:""}}>
                <Link href="/day">
                    <Typography variant="body1">{dayName}</Typography>
                    <Typography variant="body2" sx={{width:"25px", height:"25px", lineHeight:"25px", backgroundColor:activeDay, borderRadius:"50%", textAlign:"center"}}>{dayNum}</Typography>
                    <Box sx={{width: "100%", marginTop:"6px", justifyContent:"Center"}}>
                        <TaskList/>
                    </Box>
                </Link>
                {isDayActive && <Box sx={{position:"absolute", top:"0px", right:"0px", backgroundColor:"#0000001a", zIndex:"999", height:"100%", width:"100%",}}></Box>}
        </Card>
    );
};

export default CalendarDay;