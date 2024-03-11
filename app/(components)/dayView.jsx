"use client"
import { Button, Table, TableContainer, TableRow, TableCell, Typography, TableBody, Container, Stack } from "@mui/material"; 
import dayjs from "dayjs";
import TaskList from "./taskList";
const duration = require('dayjs/plugin/duration')
dayjs.extend(duration);

const DayView = ({date, onReturn}) => {

    let hour = 0;
    const hours = new Array(24).fill(null).map(() =>
    (hour < 10 ? `0${hour++}:00` : `${hour++}:00`)); 

    return (
        <Container disableGutters> 
            <Stack sx={{display: "flex", justifyContent:"space-between", flexDirection:"row", paddingLeft:"2rem"}}>
                <Typography variant="h6">DAY / MONTH INFO</Typography>
                <Button variant="outlined" onClick={onReturn} sx={{color:"black", borderColor:"black"}}>RETURN</Button>
            </Stack>
            <TableContainer>
                <Table stickyHeader>
                    <TableBody>
                        {hours.map(hour => (
                            <TableRow key={hour}>
                                <TableCell>{hour}</TableCell>
                                <TableCell>
                                    <TaskList/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default DayView;