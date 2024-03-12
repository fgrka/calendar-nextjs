import Link from "next/link"; 
import { Card, Typography, Box } from "@mui/material";
import TaskList from "./task-list";
import dayjs from "dayjs";

const CalendarDay = ({dateInfo, index}) => {
    const dayNum = dateInfo.format("DD");
    const dayName = dateInfo.format("ddd");
    const cardHeigth = index === 0 ? "10rem" : "8rem";
    const activeDay = dayjs().isSame(dateInfo, "day") ? "#1976d2" : "white";

    return (
        <Card square sx={{ display:"flex", justifyContent:"start", flexDirection:"column", alignItems:"left", height:cardHeigth, width:"8rem", padding:"0.5rem", borderBottom:"solid lightgray 1px", borderRight:"solid lightgray 1px", boxShadow:"none"}}>
            <Link href="/day">
                {index === 0 && <Typography variant="body">{dayName}</Typography>}
                <Typography variant="body2" sx={{width:"25px", height:"25px", lineHeight:"25px", backgroundColor:activeDay, borderRadius:"50%", textAlign:"center"}}>{dayNum}</Typography>
                <Box sx={{width: "100%", marginTop:"6px", justifyContent:"Center"}}>
                    <TaskList/>
                </Box>
            </Link>
        </Card>
    );
};

export default CalendarDay;