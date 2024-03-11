import { Stack, Typography, IconButton, Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const CalendarHeader = ({displayedMonth, displayedYear, handleMonthChange, handleReset}) => {

    return (
        <Stack direction="row" spacing="1rem" sx={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom: "1rem"}}>
             <Stack direction="row" spacing="1rem" sx={{ display:"flex", alignItems:"center",  }}>
                <IconButton onClick={() => handleMonthChange(-1)}>
                    <ArrowBackIosIcon/>
                </IconButton>
                <IconButton onClick={() => handleMonthChange(1)}>
                    <ArrowForwardIosIcon/>
                </IconButton>
                <Typography variant="h5">{displayedMonth}</Typography>
                <Typography variant="h5">{displayedYear}</Typography>
             </Stack>
             <Stack>
                <Button variant="outlined" onClick={handleReset} sx={{color:"black", borderColor:"black"}}>Today</Button>
             </Stack>
        </Stack>
    );
};

export default CalendarHeader;