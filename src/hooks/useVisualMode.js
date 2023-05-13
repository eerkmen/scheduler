import {useState} from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
 
  function back(){
    if (history[history.length -1] !== initial) {
      history.pop();
      setHistory(history);
      setMode(history[history.length - 1]);
    }
  }  
  function transition(mode, replace = false) {
    if (replace) {
      setMode(mode);
      history.pop();
    } 
    setMode(mode);
    setHistory(prev => [...prev, mode]);
  }

}
  // removes the last item in the history array, and sets the mode to be the second to last s