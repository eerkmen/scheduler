import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    }).catch((error) => {
      console.error(error.message);
    });
  }, []);

  function updateSpots(spot) {
    const selectedDay = state.days.find(day => day.name === state.day);
    const dayId = selectedDay.id;
    const daysUpdated = [...state.days].map(day => day.id === dayId ? { ...day, spots: day.spots + spot } : { ...day });
    return daysUpdated;
  };
  const setDay = day => setState({ ...state, day });
 
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const oldInt = state.appointments[id].interview;
    const newInt = oldInt ? 0 : -1;

    const days = updateSpots(newInt)
    return axios.put(`/api/appointments/${appointment.id}`, appointment)
      .then((res) => {
        const status = res.status
        setState(prev => ({
          ...prev,
          appointments,
          days
        }));
        return status;
      })
  }
  
  async function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    
    const days = updateSpots(1)
    await axios.delete(`/api/appointments/${id}`, appointment)
      .then( response =>{
        const status = response.status
        setState(prev => ({
          ...prev,
          appointments,
          days
        }));
      return status;
      })
  }
      
  return {
    setDay,
    bookInterview,
    state,
    cancelInterview,
  };
}