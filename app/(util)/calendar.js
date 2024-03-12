import dayjs from "dayjs";


export function getMonth(month) {
 
    const year = dayjs().year();
    let firstDayOfFirstWeek = dayjs(new Date(year, month, 1)).day();
    let currentDay = 1 - firstDayOfFirstWeek;
    const monthMatrix = new Array(5).fill([]).map(() => {
            return new Array(7).fill(null).map(() => {

                let date = dayjs(new Date(year, month, currentDay));
                currentDay++;
                return date;
            })
    })

    return monthMatrix;
}

// const monthLength = dayjs(new Date(year, month, 1)).daysInMonth(); 
// return new Array(7).fill(null).map(() => {
//     currentDay++;
//     if (currentDay <= monthLength) {
    
//     return(dayjs(new Date(year, month, currentDay)));}
//     else return;
// })