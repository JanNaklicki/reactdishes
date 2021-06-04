import Input from "./UI/Input";
import classes from "./DishFrom.module.css";
import Card from "./UI/Card";
import React, { useEffect, useReducer, Fragment, useState } from "react";
import DefaultInputs from "./DefaultInputs";
import SpicinessBar from "./UI/SpicinessBar";

const initialState = { typeSelected: 1 };
const initialFromState = {
  name: "",
  pereparationTime: 0,
  dishType: "",
  diameter: 0,
  noOfSlices: 0,
  spiciness: 0,
  slicesOfBread: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Pizza":
      return { typeSelected: 1 };
    case "Soup":
      return { typeSelected: 2 };
    case "Sandwich":
      return { typeSelected: 3 };
    default:
      return new Error();
  }
};

const formReducer = (state, action) => {
  let updatedState = state;
  switch (action.type) {
    case "name":
      updatedState.name = action.value;
      return updatedState;
    case "prep":
      updatedState.pereparationTime = action.value;
      return updatedState;
    case "dishType":
      updatedState.pereparationTime = action.value;
      return updatedState;
    case "diameter":
      updatedState.pereparationTime = action.value;
      return updatedState;
    case "noOfSlices":
      updatedState.pereparationTime = action.value;
      return updatedState;
    case "spiciness":
      updatedState.pereparationTime = action.value;
      return updatedState;
    case "slicesOfBread":
      updatedState.pereparationTime = action.value;
      return updatedState;
    default:
      return new Error();
  }
};

const DishFrom = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, dispatchForm] = useReducer(formReducer, initialFromState);

  const chosenTypeOfFood = (event) => {
    dispatch({ type: event.target.value });
  };

  
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target);

  };

  return (
    <Card>
      {/* <h2> Dish form</h2> */}
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <DefaultInputs typeOfDish={chosenTypeOfFood}></DefaultInputs>
          {
            // Pizza
            state.typeSelected === 1 && (
              <Fragment>
                <Input
                  label="Number of slices"
                  onChange={dispatchForm}
                  input={{ id: "amount_", type: "number", step: "1" }}
                />
                <Input
                  label="Diameter (cm)"
                  placeholder="30"
                  onChange={dispatchForm}
                  input={{ id: "amount_", type: "number", step: "0.1" }}
                />
              </Fragment>
            )
          }
          {
            // Soup
            state.typeSelected === 2 && <SpicinessBar />
          }

          {
            //Sandwich
            state.typeSelected === 3 && (
              <Input
                label="Slices of bread "
                onChange={dispatchForm}
                input={{
                  id: "amount_",
                  type: "number",
                  min: "0",
                  step: "1",
                  value: "1",
                }}
              />
            )
          }
        </div>

        <button className={classes.button} type="submit">
          Submit
        </button>
      </form>
    </Card>
  );
};

export default DishFrom;
