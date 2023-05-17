import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  function updateSpots(day, number) {
    const dayID = state.days.map(day=> day.name).indexOf(day);
    const spots = state.days[dayID].spots;
    state.days[dayID] = {
      ...state.days[dayID],
      spots: spots + number
    }
  } 
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

  const cancelInterview = (id) => {
    
  }
  

    return axios.put(`/api/appointments/${id}`, {...appointment})
      .then(() => {
        dispatch({
          type: SET_INTERVIEW,
          id,
          interview: interview ?? null,
        });
        dispatch({
          type: SET_DAYS,
          id,
        });
      });
  };

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

}