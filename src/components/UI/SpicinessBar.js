import classes from "./Input.module.css";
import {useState} from 'react'

const SpicinessBar = (props) => {
  const [rangeValue, setRangeValue] = useState(1);
  const rangeValueHandler = (event) =>
  {
      setRangeValue(event.target.value);
  }
  // TODO: Better css for range input
  return (
    // <Input label="Spiciness" input={{ id: "amount_", type: "range", min: "0", max: "10",step: "1",}}/>
    
    <div className={classes.input}>
      <label htmlFor="spiceInput">Spiciness</label>
      <div style={{display:'flex'}}>
        <input onInput={rangeValueHandler} defaultValue={1} required id="spiciness" type="range" min="1" max="10" step="1" onChange={props.onChange}/>
        <div>{rangeValue}</div>
      </div>
    </div>
  );
};
export default SpicinessBar;
