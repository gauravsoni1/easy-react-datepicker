import React, { Component } from "react";
import "./datepickerInput.css";
import DatePicker from "../datepicker/datepicker";
import moment from "moment";

class DatepickerInput extends Component {
  componentDidMount = () => {
    document.addEventListener("click", this);
    this.setState({
      name: this.props.name || null,
      selectedDate: moment(this.props.selectedDate) || moment(),
      dateFormat: this.props.dateFormat || 'DD/MM/YYYY'
    });
  };

  componentDidUpdate = prevState => {
    if (prevState.selectedDate !== this.props.selectedDate) {
      this.setState({ selectedDate: moment(this.props.selectedDate) });
    }
  };

  componentWillUnmount = () => {
    document.removeEventListener("click", this);
  };

  //Used to hide the datepicker if the mouse is clicked else where
  mouseClickListener = e => {
    if (
      !e.target.closest(".datepicker-container") &&
      !e.target.closest(".datepicker-input")
    ) {
      this.setState({ showPicker: false });
    }
  };

  //Javascript automatically calls handleEvent since we are passing the class reference to the add eventlistener
  handleEvent = e => {
    if (!this.state.element.current.contains(e.target)) {
      this.setState({ showPicker: false });
    }
  };

  state = {
    showPicker: false,
    selectedDate: moment(),
    element: React.createRef(),
    dateFormat:'DD/MM/YYYY',
    name: null
  };

  //Toggle the datepicker view when clicking on the input box
  togglePicker = () => {
    this.setState(prevState => {
      return { showPicker: !prevState.showPicker };
    });
  };

  //Function called when the date is selected
  dateSelected = date => {
    this.togglePicker();
    this.setState({ selectedDate: date });
    if (typeof(this.props.dateSelected)==='function'){
      this.props.dateSelected(new Date(date.format()));
    }
  };

  render() {
    return (
      <div ref={this.state.element}>
        <div className="datepicker-input">
          <input
            name={this.state.name}
            readOnly
            type="text"
            onFocus
            onFocus={this.togglePicker}
            value={moment(this.state.selectedDate).format(this.state.dateFormat)}
          />
        </div>
        {this.state.showPicker ? (
          <div className="datepicker-overlay">
            <DatePicker
              dateSelected={this.dateSelected}
              selectedDate={this.state.selectedDate}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default DatepickerInput;
