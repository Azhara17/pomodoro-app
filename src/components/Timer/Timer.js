import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";
import StartBtn from "../Btn/StartBtn";
import PauseBtn from "../Btn/PauseBtn";
import SettingsBtn from "../Btn/SettingsBtn";
import { useContext } from "react";
import SettingsContext from "../SettingsWindow/SettingsContext";

function Timer() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div>
      <SettingsBtn onClick={() => settingsInfo.setShowSettings(true)} />
      <CircularProgressbar
        value={60}
        text={`60%`}
        styles={buildStyles({
          width: "300px",
          height: "300px",
          pathColor: "#FAFAFA",
          tailColor: "rgba(250, 250, 250, 0.1);",
          strokeWidth: 5,
          backgroundColor: "none",
        })}
      />
      <StartBtn />
      <PauseBtn />
    </div>
  );
}
export default Timer;
