import classes from "./SpicinessBar.module.css";
import { useState } from "react";

const SpicinessBar = (props) => {
  const [rangeValue, setRangeValue] = useState(1);
  const rangeValueHandler = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div className={classes.input}>
      <label htmlFor="spiceInput">Spiciness: {rangeValue} 🌶️</label>
      <div style={{ display: "flex" }}>
        <input
          onInput={rangeValueHandler}
          onChange={props.onChange}
          defaultValue={1}
          required
          id="spiciness"
          type="range"
          min="1"
          max="10"
          step="1"
        />
      </div>
    </div>
  );
};
export default SpicinessBar;
