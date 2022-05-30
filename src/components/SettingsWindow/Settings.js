import React from "react";
import CloseBtn from "../Btn/CloseBtn";
import SaveBtn from "../Btn/SaveBtn";
import "./Settings.css";
import SettingsInput from "./SettingsInput";
import SettingsContext from "./SettingsContext";
import { useContext } from "react";

function SettingsWindow() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="settings-box">
      <SettingsInput
        title="Pomodoro"
        value={settingsInfo.pomodoroMinutes}
        onChange={(newValue) => settingsInfo.setPomodoroMinutes(newValue)}
      />
      <SettingsInput
        title="Short Break"
        value={settingsInfo.shortBreakMinutes}
        onChange={(newValue) => settingsInfo.setShortBreakMinutes(newValue)}
      />
      <SettingsInput
        title="Long Break"
        value={settingsInfo.longBreakMinutes}
        onChange={(newValue) => settingsInfo.setLongBreakMinutes(newValue)}
      />
      <SettingsInput
        title="Number of pomodoro between break"
        value={settingsInfo.fullPomodoroMinutes}
        onChange={(newValue) => settingsInfo.setFullPomodoroMinutes(newValue)}
      />
      <div className="settings-box__btns">
        <CloseBtn onClick={() => settingsInfo.setShowSettings(false)} />
        <SaveBtn />
      </div>
    </div>
  );
}

export default SettingsWindow;
