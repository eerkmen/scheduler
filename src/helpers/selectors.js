export function getInterview(state, interview){
  if (interview) {
    return {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer] 
    }
  }
  return null;
}

export function getInterviewersForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }
  const found = state.days.find(item => item.name === day);
  if (!found) {
    return [];
  }
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
