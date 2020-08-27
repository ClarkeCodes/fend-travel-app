function handleDates(startDate, endDate) {
    const today = new Date();
    const depart = new Date(startDate);
    const returnDate = new Date(endDate);

    // const date1 = new Date('7/13/2010');
    // const date2 = new Date('12/15/2010');
    // const diffTime = Math.abs(date2 - date1);
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const countdown = Math.floor((depart.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)); 
    const duration = Math.ceil((returnDate.getTime() - depart.getTime()) / (1000 * 60 * 60 * 24));
    // const duration = Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));
    console.log(duration);
    console.log(countdown);
    return duration;
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
}

export { handleDates };