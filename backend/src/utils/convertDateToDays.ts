export default function convertDateToDays(date:string){
    const [days, month] = date.split('/').map(Number);
    const numberOfDays = (month * 30) + days;

    return numberOfDays;
}