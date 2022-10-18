import React from "react";
import classes from "./MyCheckbox.module.css";

function MyCheckbox({ text, onChange, isChecked, name }) {
  return (
    <label className={classes.check}>
      <input
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
        name={name}
        className={classes.check__input}
      ></input>
      <span className={classes.check__box}></span>
      <span className={classes.check__text}>{text}</span>
    </label>
  );
}
export default MyCheckbox;
