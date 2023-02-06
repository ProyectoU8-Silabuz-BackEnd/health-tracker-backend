

export const getDateArray = function(startDate: Date, endDate: Date, interval : number) {

  
    let dateArray = [];
  let currentDate = new Date(startDate);

 while (currentDate <= endDate) {
    dateArray.push(new Date(currentDate));
    currentDate.setTime(currentDate.getTime() + interval);
  }

//getDate() devuelve el día del mes para la fecha especificada
//setDate() method changes the day of the month of a given Date instance,
  
  return dateArray;

};
