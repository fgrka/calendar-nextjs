"use client"
import { useContext } from 'react';
import { AppContext } from '../(context)/context';
import { useEffect, useState } from 'react';
import { getMonth } from '../(util)/calendar';
import { Box, Container, Grid } from '@mui/material';
import CalendarHeader from './calendar-header';
import CalendarDay from './calendar-day';
import dayjs from 'dayjs';

const Calendar = () => {
    const { monthIdx, setDateToDisplay } = useContext(AppContext);
    const [monthMatrix, setMonthMatrix] = useState(getMonth(dayjs().month()));
    const initFirstDayOfCurrMonth = monthMatrix[0].filter((day) => day.date() === 1);


    useEffect(() => {
        const newMonthMatrix = getMonth(monthIdx);
        setMonthMatrix(newMonthMatrix);
        const firstDayOfCurrMonth = newMonthMatrix[0].filter((day) => day.date() === 1);
        setDateToDisplay(firstDayOfCurrMonth[0]);
        console.log(firstDayOfCurrMonth[0])
    }, [monthIdx]);
 
    return (
        <Container disableGutters> 
            <CalendarHeader/>
            <Container sx={{ display:"flex", flexDirection:"row", borderTop:"solid 1px lightgray"}} disableGutters> 
                <Box sx={{ width: "max-content" }} >
                {monthMatrix.map((row, rowIdx) => (
                    <Grid key={rowIdx} container direction="row" justifyContent="left" sx={{marginBottom:"0px", paddingLeft:"0px"}}>
                        {row.map((date, key) => {
                            if (date) {
                                return(    
                                    <CalendarDay key={key} dateInfo={date} index={rowIdx}/>
                                )
                            }
                        })}
                    </Grid>
                ))} 
                </Box>
            </Container>
        </Container>
    );
};

export default Calendar;