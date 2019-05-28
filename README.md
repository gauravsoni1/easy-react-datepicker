# Easy-React-Datepicker

Reusable React Datepicker component

### Installing

Simply install using 

```
npm install easy-react-datepicker --save
```
This will install the component in your project and add the reference to your package.json


## Usage

```
//Import using
import DatePicker from 'easy-react-datepicker'

//Use the Datepicker as follows
<DatePicker name="date" selectedDate={new Date(this.state.event.eventDate)}/>
```

## Properties

| Property        | Default           | Description|
| ------------- |:-------------:| -----:|
| selectedDate      | currentDate | The date that is currently selected |
| name      | null      |  Use the name property if using the datepicker in a form, can be used to retrive the value of datepicker  |


## Note

1. The default date need to be passed in the Javascript Date format