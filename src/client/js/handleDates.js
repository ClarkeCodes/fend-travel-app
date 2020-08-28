function handleDates(startDate, endDate) {
    const today = new Date();
    const depart = new Date(startDate);
    const returnDate = new Date(endDate);

    const countdown = Math.round((depart.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)); 
    const duration = Math.ceil((returnDate.getTime() - depart.getTime()) / (1000 * 60 * 60 * 24));

    console.log(duration);
    console.log(countdown);

    return { duration: duration, countdown: countdown };
}

export { handleDates };