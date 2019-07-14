import React from "react";
import moment from 'moment';

const DatepickerHeader = (props) => {
  return (
    <div className="action-row">
      <label>{moment(props.selectedMonth).format("MMMM , YYYY")}</label>
      <div className="action-icon">
        <div className="calendar-buttons">
          <div onClick={props.previousMonth}>
            {"<"}
          </div>
          <div className="today" onClick={props.today}>
            {"Today"}
          </div>
          <div onClick={props.nextMonth}>
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatepickerHeader;
