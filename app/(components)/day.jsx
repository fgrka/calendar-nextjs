import { Card, CardActionArea, Typography, Box } from "@mui/material";
import TaskList from "./taskList";
import dayjs from "dayjs";

const Day = ({dateInfo, index, onDayClick}) => {
    const dayNum = dateInfo.format("DD");
    const dayName = dateInfo.format("ddd");
    const cardHeigth = index === 0 ? "10rem" : "8rem";
    const activeDay = dayjs().isSame(dateInfo, "day") ? "#a8dadc" : "white";

    return (
        <Card  sx={{ display:"flex", justifyContent:"start", flexDirection:"column", alignItems:"left", height:cardHeigth, width:"8rem", padding:"0.5rem", borderRadius:"0px", boxShadow:"none", border:"solid lightgray 1px"}}>
            <CardActionArea onClick={onDayClick}>
                {index === 0 && <Typography variant="body">{dayName}</Typography>}
                <Typography variant="body2" sx={{width:"20px", height:"20px", backgroundColor:activeDay, borderRadius:"50%", textAlign:"center"}}>{dayNum}</Typography>
                <Box sx={{width: "100%", marginTop:"6px", justifyContent:"Center"}}>
                    <TaskList/>
                </Box>
            </CardActionArea>
        </Card>
    );
};

export default Day;