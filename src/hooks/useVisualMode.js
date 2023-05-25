export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
 
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

  return { mode, transition, back };
}
