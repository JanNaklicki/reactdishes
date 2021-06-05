import React, { Fragment } from "react";
import classes from "./Input.module.css";
const dishTypes = ["Pizza", "Soup", "Sandwich"];

const Select = (props) => {
  const options = dishTypes.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });

  return (
    <Fragment>
      <div className={classes.input}>
        <label>{props.label}</label>
        <select onChange={props.onChange}>{options}</select>
      </div>
    </Fragment>
  );
};
export default Select;
