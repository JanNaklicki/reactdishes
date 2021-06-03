import Input from "./UI/Input";
import classes from "./DishFrom.module.css";
import Card from "./UI/Card";
import Select from "./UI/Select";
import React, { useState, Fragment } from "react";
const DishFrom = () => {
  const [isPizzaChosen, setPizzaChosen] = useState(false);

  const chosenTypeOfFood = (event) => {
    const typeChosen = event.target.value;
    if (typeChosen === "pizza") {
      setPizzaChosen(true);
    } else {
      setPizzaChosen(false);
    }
  };

  return (
    <Card>
      <h2> Dish form</h2>
      <form className={classes.form}>
        <div>
          <Input
            label="Dish name"
            input={{
              id: "amount_",
              type: "text",

              placeholder: "Name",
            }}
          />
          <Input
            label="Preparation time"
            input={{
              id: "amount_",
              type: "time",
              step: "1",
            }}
          />
          <Select onChange={chosenTypeOfFood} label="Type" />
          {isPizzaChosen && (
            <Fragment>
              <Input
                label="Number of slices"
                input={{
                  id: "amount_",
                  type: "number",
                  step: "1",
                }}
              />
              <Input
                label="Diameter (cm)"
                placeholder="30"
                input={{
                  id: "amount_",
                  type: "number",
                  step: "0.1",
                }}
              />
            </Fragment>
          )}
        </div>

        <div>
          {/* TODO: ADD component for dish types (small icons) */}placeholder
        </div>
      </form>
      <button className={classes.button} type="submit">
        Submit
      </button>
    </Card>
  );
};

export default DishFrom;
