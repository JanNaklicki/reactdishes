import React, { Fragment } from "react";
import classes from "./Input.module.css";
const dishTypes = ["pizza", "soup", "sandwich"];

const Select = (props) => {
  console.log(props.label);
  const options = dishTypes.map((item) => {
    return (
      <Fragment>
        <option value={item}>{item}</option>
      </Fragment>
    );
  });

  return (
    <Fragment>
      <div className={classes.input}>
        <label>{props.label}:</label>
        <select onChange={props.onChange}>{options}</select>
      </div>
    </Fragment>
  );
};
export default Select;
