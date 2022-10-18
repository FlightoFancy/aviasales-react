import React from "react";
import classes from "./Ticket.module.css";
import {
  getCountStops,
  getTimeArrival,
  getTimeFromDate,
  getTimeFromMins,
} from "../../utilites/dateUtility";

function Ticket({ tickets }) {
  
  const priceStr = String(tickets.price).replace(/(\d)(?=(\d{3})+$)/g, "$1 ");

  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <div className={classes.ticket__price}>{`${priceStr} \u20bd`}</div>
        <div className={classes.ticket__airlogo}>
          <img
            src={`https://pics.avs.io/99/36/%7B${tickets.carrier}%7D.png`}
          ></img>
        </div>
      </div>
      <div className={classes.ticket__forward}>
        <div className={classes.ticket__forward__route}>
          <span className={classes.ticket__route}>
            {tickets.segments[0].origin} – {tickets.segments[0].destination}
          </span>
          <span>
            {getTimeFromDate(tickets.segments[0].date)} –{" "}
            {getTimeArrival(
              tickets.segments[0].date,
              tickets.segments[0].duration
            )}
          </span>
        </div>
        <div className={classes.ticket__forward__lenght}>
          <span className={classes.ticket__lenght}>В пути</span>
          <span className={classes.ticket__time}>{getTimeFromMins(tickets.segments[0].duration)}</span>
        </div>
        <div className={classes.ticket__forward__stops}>
          <span className={classes.ticket__stops}>
            {getCountStops(tickets.segments[0].stops.length)}
          </span>
          <span>{tickets.segments[0].stops.join(", ")}</span>
        </div>
      </div>
      <div className={classes.ticket__back}>
        <div className={classes.ticket__back__route}>
          <span className={classes.ticket__route}>
            {tickets.segments[1].origin} – {tickets.segments[1].destination}
          </span>
          <span>
            {getTimeFromDate(tickets.segments[1].date)} –{" "}
            {getTimeArrival(
              tickets.segments[1].date,
              tickets.segments[1].duration
            )}
          </span>
        </div>
        <div className={classes.ticket__back__lenght}>
          <span className={classes.ticket__lenght}>В пути</span>
          <span className={classes.ticket__time}>{getTimeFromMins(tickets.segments[1].duration)}</span>
        </div>
        <div className={classes.ticket__back__stops}>
          <span className={classes.ticket__stops}>
            {getCountStops(tickets.segments[1].stops.length)}
          </span>
          <span>{tickets.segments[1].stops.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}
export default Ticket;
