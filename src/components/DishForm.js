import Input from "./UI/Input";
import classes from "./DishFrom.module.css";
import Card from "./UI/Card";
import React, { useReducer, Fragment, useState } from "react";
import Select from "./UI/Select";
import SpicinessBar from "./UI/SpicinessBar";
import Submit from "./Helpers/Submit";

const initialState = { typeSelected: "pizza" };
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
  console.log(action.type);

  switch (action.type) {
    case "Pizza":
      return { typeSelected: "pizza" };
    case "Soup":
      return { typeSelected: "soup" };
    case "Sandwich":
      return { typeSelected: "sandwich" };
    default:
      return new Error();
  }
};

const formReducer = (state, action) => {
  let updatedState = state;
  console.log(action.type);
  switch (action.type) {
    case "name":
      updatedState.name = action.value;
      return updatedState;
    case "prep":
      updatedState.pereparationTime = action.value;
      return updatedState;
    case "noOfSlices":
      updatedState.noOfSlices = action.value;
      return updatedState;
    case "diameter":
      updatedState.diameter = action.value;
      return updatedState;
    case "spiciness":
      updatedState.spiciness = action.value;
      return updatedState;
    case "slicesOfBread":
      updatedState.slicesOfBread = action.value;
      return updatedState;
    default:
      console.log("coś poszło nie tak");
      return new Error();
  }
};

const DishFrom = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, dispatchForm] = useReducer(formReducer, initialFromState);
  const [responseMessage, setResponseMessage] = useState(" ");

  const typeOfFoodHandler = (event) => {
    dispatch({ type: event.target.value });
  };

  const dataHandler = (event) => {
    dispatchForm({ type: event.target.id, value: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    Submit(formState, state, setResponseMessage);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <Input
            label="Dish name"
            input={{ id: "name", type: "text", placeholder: "Name" }}
            onChange={dataHandler}
          />
          <Input
            label="Preparation time"
            input={{ id: "prep", type: "time", step: "1" }}
            onChange={dataHandler}
          />
          <Select onChange={typeOfFoodHandler} label="Type of dish" />
          {
            // Pizza
            state.typeSelected === "pizza" && (
              <Fragment>
                <Input
                  label="Number of slices"
                  onChange={dataHandler}
                  input={{
                    id: "noOfSlices",
                    type: "number",
                    step: "1",
                    min: "1",
                  }}
                />
                <Input
                  label="Diameter (cm)"
                  placeholder="30"
                  onChange={dataHandler}
                  input={{
                    id: "diameter",
                    type: "number",
                    step: "0.1",
                    min: "-1",
                  }}
                />
              </Fragment>
            )
          }
          {
            // Soup
            state.typeSelected === "soup" && (
              <SpicinessBar onChange={dataHandler} />
            )
          }

          {
            //Sandwich
            state.typeSelected === "sandwich" && (
              <Input
                label="Slices of bread "
                onChange={dataHandler}
                input={{
                  id: "slicesOfBread",
                  type: "number",
                  min: "0",
                  step: "1",
                  placeholder: 1,
                }}
              />
            )
          }
        </div>

        {responseMessage === true && <div className={classes.done}>Done!</div>}
        {!responseMessage === true && (
          <div className={classes.error}>Something went wrong</div>
        )}
        <button className={classes.button} type="submit">
          Submit
        </button>
      </form>
    </Card>
  );
};

export default DishFrom;
