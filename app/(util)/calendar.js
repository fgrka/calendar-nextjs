
import dayjs from "dayjs";


export function getMonth(month) {
 
// change first day on the month to Monday 

    const year = dayjs().year();
    const monthLength = dayjs(new Date(year, month, 1)).daysInMonth(); 
    let currentDay = 0;
    const monthMatrix = new Array(5).fill([]).map(() => {
            return new Array(7).fill(null).map(() => {
                currentDay++;
                if (currentDay <= monthLength) return(dayjs(new Date(year, month, currentDay)));
                else return;
            })
    })

    return monthMatrix;
}

