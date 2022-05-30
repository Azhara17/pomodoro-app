import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";
import SettingsWindow from "./components/SettingsWindow/Settings";
import SettingsContext from "./components/SettingsWindow/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [pomodoroMinutes, setPomodoroMinutes] = useState(25);
  const [shortBreakMinutes, setShortBreakMinutes] = useState(5);
  const [longBreakMinutes, setLongBreakMinutes] = useState(15);
  const [fullPomodoroMinutes, setFullPomodoroMinutes] = useState(4);

  return (
    <div>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          pomodoroMinutes,
          shortBreakMinutes,
          longBreakMinutes,
          fullPomodoroMinutes,
          setPomodoroMinutes,
          setShortBreakMinutes,
          setLongBreakMinutes,
          setFullPomodoroMinutes,
        }}
      >
        {showSettings ? <SettingsWindow /> : <Timer />}
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
