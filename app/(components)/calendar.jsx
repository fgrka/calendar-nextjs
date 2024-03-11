"use client"
import { useEffect, useState } from 'react';
import { getMonth } from '../(util)/calendar';
import { Box, Container, Grid } from '@mui/material';
import CalendarHeader from './calendarHeader';
import Day from './day';
import dayjs from 'dayjs';

const Calendar = ({handleClick}) => {
    const [monthMatrix, setMonthMatrix] = useState(getMonth(dayjs().month()));
    const [currentMonthIdx, setCurrentMontIdx] = useState(parseInt(monthMatrix[0][0].month()));
    const currentMonthName = monthMatrix[0][0].format("MMMM");
    const currentYear = monthMatrix[0][0].format("YYYY");
    
    useEffect(() => {
        const newMonthMatrix = getMonth(currentMonthIdx);
        setMonthMatrix(newMonthMatrix);
    }, [currentMonthIdx]);

    const handleMonthChange = (navIdx) => {
        setCurrentMontIdx((prev) => prev + navIdx);
    }

    const handleReset = () => {
        setCurrentMontIdx(dayjs().month());
    }
 
    return (
        <Container disableGutters> 
            <CalendarHeader displayedMonth={currentMonthName} displayedYear={currentYear} handleMonthChange={handleMonthChange} handleReset={handleReset}/>
            <Container sx={{ display:"flex", flexDirection:"row"}} disableGutters> 
                <Box  sx={{ width: "max-content" }} >
                {monthMatrix.map((row, rowIdx) => (
                    <Grid key={rowIdx} container direction="row" justifyContent="left" sx={{marginBottom:"0px", paddingLeft:"0px"}}>
                        {row.map((date, key) => {
                            if (date) {
                                return(    
                                    <Day key={key} dateInfo={date} index={rowIdx} onDayClick={handleClick}/>
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