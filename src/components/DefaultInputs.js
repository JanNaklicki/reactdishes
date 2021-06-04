import React, { Fragment } from "react";
import Input from "./UI/Input";
import Select from "./UI/Select";
const DefaultInputs = (props) => {
  return (
    <Fragment>
      <Input onChange={props.onChange} label="Dish name"input={{id: "amount_",type: "text",placeholder: "Name",}}/>
      <Input onChange={props.onChange} label="Preparation time" input={{id: "amount_",type: "time",step: "1"}}/>
      <Select onChange={props.typeOfDish} label="Type of dish" />
    </Fragment>
  );
};
export default DefaultInputs;
