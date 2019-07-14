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

state = {
  selectedDate:new Date(),
  dateFormat: 'dddd'
}

//Use the Datepicker as follows
render() {
  return (
    <div>
      <DatePicker selectedDate={new Date(this.state.selectedDate)} />
    </div>
  );
}
```

## Example

[![Edit easy-react-datepicker](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/easyreactdatepicker-izk1v?fontsize=14)


## Properties

| Property        | Default           | Description|
| ------------- |:-------------:| -----:|
| selectedDate      | currentDate | Set the default date|
| name      | null      |  Use the name property if using the datepicker in a form, can be used to retrive the value of datepicker  |
| dateFormat      | DD/MM/YYYY     |  Set the format of the date in the datepicker input box, refer [MomentJS Date Formating](https://momentjs.com/docs/#/displaying/format/)|

## Handlers

| Event        | Description           | Param|
| ------------- |:-------------:| -----:|
| dateSelected      |   Called when a new date is selected | Returns the date selected of type Date | 



## Note

1. The default date need to be passed in the Javascript Date format
