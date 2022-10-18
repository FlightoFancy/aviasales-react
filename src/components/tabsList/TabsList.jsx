import React from "react";
import classes from "./TabsList.module.css";

function TabsList({ changeWordSort }) {
  function clickTab(e) {
    const tabsItem = document.querySelectorAll(`.${classes.tabs__item}`);
    const child = e.target;
    tabsItem.forEach((el) => el.classList.remove(`${classes.isSelected}`));
    child.classList.add(`${classes.isSelected}`);
  }
  return (
    <ul className={classes.tabs__list} onClick={clickTab}>
      <li
        onClick={() => changeWordSort("cheap")}
        className={classes.tabs__item + " " + classes.isSelected}
      >
        Самый дешевый
      </li>
      <li onClick={() => changeWordSort("fast")} className={classes.tabs__item}>
        Самый быстрый
      </li>
      <li
        onClick={() => changeWordSort("optimal")}
        className={classes.tabs__item}
      >
        Оптимальный
      </li>
    </ul>
  );
}
export default TabsList;
