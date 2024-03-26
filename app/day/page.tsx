import React from "react";
import Link from "next/link";
import { Button, Table, TableContainer, TableRow, TableCell, Typography, TableBody, Container, Stack } from "@mui/material"; 
import TaskList from "../(components)/TaskList";

const DayView = () => {

    let hour = 0;
    const hours = new Array(24).fill(null).map(() =>
    (hour < 10 ? `0${hour++}:00` : `${hour++}:00`)); 

    return (
        <Container disableGutters> 
            <Stack sx={{display: "flex", justifyContent:"space-between", flexDirection:"row", paddingLeft:"2rem", marginTop:"2rem",}}>
                <Typography variant="h6">DAY / MONTH INFO</Typography>
                <Link href="/">
                    <Button variant="outlined" sx={{color:"black", borderColor:"black"}}>
                        RETURN
                    </Button>
                </Link>
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