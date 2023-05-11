export function getInterview(state, interview){

}
export const getAppointmentsForDay = (state, dayName) => {
  const [dayData] = state.days.filter(day => day.name === dayName);

  if (!dayData) {
    return [];
  }

  return Object.values(state.appointments).filter(appointment => {
    return dayData.appointments.includes(appointment.id);
  });
};
