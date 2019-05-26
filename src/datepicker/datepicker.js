import React, { Component } from "react";
import moment from "moment";

import './datepicker.css';
import Days from "./days";
import DatepickerHeader from "./datepickerHeader";

class DatePicker extends Component {
  componentDidMount(){
    if (this.props.selectedDate){
      this.setState({selectedDate:this.props.selectedDate,selectedMonth:this.props.selectedDate})
    }    
  }

  state = {
    selectedDate: moment(),
    selectedMonth: moment(),
    today: moment()
  };

  previousMonth = () => {
    let updatedMonth = moment(this.state.selectedMonth).subtract(1, "M");
    this.setState({ selectedMonth: updatedMonth });
  };

  nextMonth = () => {
    let updatedMonth = moment(this.state.selectedMonth).add(1, "M");
    this.setState({ selectedMonth: updatedMonth });
  };

  updateSelectedDate = day => {
    this.setState({ selectedDate: day });
    if (typeof this.props.dateSelected === "function") {
      this.props.dateSelected(day);
    }
  };

  render() {
    let { selectedMonth,selectedDate } = this.state;

    const renderDates = () => {
      const calendarRow = [];
      const calendarDates = [];
      const monthStartingDate = moment(selectedMonth).startOf("month");
      const selectedMonthNumber = moment(selectedMonth).get("month");
      const startingDayOfMonth = moment(monthStartingDate).days();
      let startingDay = moment(monthStartingDate).subtract(
        startingDayOfMonth,
        "d"
      );
      for (let i = 0; i < 42; null) {
        const calendarDays = [];
        for (let j = 0; j < 7; j++) {
          const index = i;
          calendarDates.push(startingDay);
          calendarDays.push(
            <span
              onClick={() => this.updateSelectedDate(calendarDates[index])}
              className={[
                moment(startingDay).get("month") !== selectedMonthNumber
                  ? "not-current-month"
                  : null,
                startingDay.format("DD/MM/YY") ===
                this.state.today.format("DD/MM/YY")
                  ? "today"
                  : null,
                startingDay.format("DD/MM/YY") ===
                this.state.selectedDate.format("DD/MM/YY")
                  ? "selected-date"
                  : null
              ].join(" ")}
              key={i}
            >
              {startingDay.format("D")}
            </span>
          );
          startingDay = moment(startingDay).add(1, "d");
          i++;
        }
        calendarRow.push(
          <div key={i} className="calendar-dates">
            {calendarDays}
          </div>
        );
      }
      return calendarRow;
    };

    return (
      <div className="datepicker-container">
        <DatepickerHeader
          selectedMonth={selectedMonth}
          previousMonth={this.previousMonth}
          nextMonth={this.nextMonth}
        />
        <div className="calendar-body">
          <Days />
          {renderDates()}
        </div>
      </div>
    );
  }
}

export default DatePicker;
