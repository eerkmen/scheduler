// Custom Hook for managing visual modes in the Appointment component
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial); // State variable to track the current mode
  const [history, setHistory] = useState([initial]); // State variable to track the mode history

  // Function to transition to the previous mode in history
  function back() {
    if (history[history.length - 1] !== initial) {
      setHistory(prev => {
        const newHistory = [...prev];
        newHistory.pop();
        return newHistory;
      });
      setMode(history[history.length - 2]);
    }
  }

  // Function to transition to a new mode
  function transition(mode, replace = false) {
    if (replace) {
      setMode(mode);
      setHistory(prev => {
        const newHistory = [...prev];
        newHistory.pop();
        return [...newHistory, mode];
      });
    } else {
      setMode(mode);
      setHistory(prev => [...prev, mode]);
    }
  }

  // Return the mode, transition function, and back function
  return { mode, transition, back };
}
