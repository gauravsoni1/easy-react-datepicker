import React from "react";
import moment from 'moment';

const DatepickerHeader = (props) => {
  return (
    <div className="action-row">
      <label>{moment(props.selectedMonth).format("MMMM , YYYY")}</label>
      <div className="action-icon">
        <div className="calendar-buttons">
          <div className="before" onClick={props.previousMonth}>
            {" "}
            {"<"}{" "}
          </div>
          <div className="after" onClick={props.nextMonth}>
            {" "}
            {">"}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatepickerHeader;
