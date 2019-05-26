import React, { Component } from "react";
import { render } from "react-dom";

import Example from "../../src";

class Demo extends Component {
  date = new Date(1524168000000);

  state = {
    selectedDate:new Date()
  }

  updateDate = (e) =>{
    this.setState({selectedDate:new Date(Number(e.target.innerHTML))})
  }

  render() {
    return (
      <div>

        <ul>
          <li onClick={this.updateDate}>1524168000000</li>
          <li onClick={this.updateDate}>1349812800000</li>
        </ul>

        {/* Selected date is - {this.state.selectedDate.getTime()} */}
        {console.log(typeof(this.state.selectedDate))}
        <h1>easy-react-datepicker Demo</h1>
        <Example selectedDate={new Date(this.state.selectedDate)}/>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));