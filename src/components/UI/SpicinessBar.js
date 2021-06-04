import classes from "./Input.module.css";

const SpicinessBar = (props) => {
  return (
    // <Input label="Spiciness" input={{ id: "amount_", type: "range", min: "0", max: "10",step: "1",}}/>
    
    <div className={classes.input}>
      <label htmlFor="spiceInput">Spiciness</label>
      <input required id="spiciness" type="range" min="0" max="10" step="1" onChange={props.onChange}/>
    </div>
  );
};
export default SpicinessBar;
