import React, { Component } from "react";
import "./loader.css";

const moment = require("moment");

export default class Loader extends Component {
  componentDidMount() {
    const progress = document.getElementById("progress");
    const counter = document.getElementById("counter");
    const days = this._getDays();
    const eventdate = moment().startOf('year');
    const todaysdate = moment();
    const diff =  todaysdate.diff(eventdate, 'days');

    let width = 0;
    let id = setInterval(() => {
      if ( width > diff || width >=days) {
        clearInterval(id);
      } else {
        width++;
        progress.style.width = (width/days)*100 + "%";
        counter.innerHTML = width;
      }
    }, 25);
  }

  _getDays() {
    const year = new Date().getFullYear();
    return moment([year]).isLeapYear() ? 366 : 365;
  }

  render() {
    return (
      <div className="loader">
        <div className="info">
          <span>1</span>
          <span className="counter" id="counter"/>
          <span>{this._getDays()}</span>
        </div>
        <div className="wrapper">
        <div className="progress" id="progress"/>
        </div>
      
      
      </div>
    );
  }
}
