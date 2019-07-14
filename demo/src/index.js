import React, { Component } from "react";
import { render } from "react-dom";

import DatePicker from "../../src";

class Demo extends Component {

  state = {
    selectedDate:new Date(),
    dateFormat: 'dddd'
  }

  updateDate = (e) =>{
    this.setState({selectedDate:new Date(Number(e.target.innerHTML))})
  }

  dateSelected= (date ) =>{
    console.log( date);
  }

  render() {
    return (
      <div>
        <h1>easy-react-datepicker Demo</h1>
        <DatePicker selectedDate={new Date(this.state.selectedDate)} dateSelected={this.dateSelected}/>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));