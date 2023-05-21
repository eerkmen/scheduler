import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

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

    await axios.delete(`api/appointments/${id}`, appointment)
      .then( response =>{
        const status = res.status
        setState(prev => ({
          ...prev,
          appointments,
          days
        }));
      return status;
      })
  }
      

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

  return {
    setDay,
    bookInterview,
    state,
    cancelInterview,
  };
}