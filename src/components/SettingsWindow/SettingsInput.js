import React from "react";
import "./Settings.css";
import { useState, useRef } from "react";

function SettingsInput({ title, name, value, onChangeHandler }) {
  return (
    <div className="settings-box__item">
      <span className="settings-box__item-title">{title}</span>
      <input className="settings-box__item-input" type="number" />
    </div>
  );
}

export default SettingsInput;
