export function getInterview(state, interview){
  if (interview) {
    return {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer] 
    }
  }
  return null;

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
