export const getAppointmentsForDay = (state, dayName) => {
  const [dayData] = state.days.filter(day => day.name === dayName);

  if (!dayData) {
    return [];
  }

 
};
