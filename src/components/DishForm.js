import Input from "./UI/Input";
import classes from "./DishFrom.module.css";
import Card from "./UI/Card";
import React, { useReducer, Fragment, useState } from "react";
import Select from "./UI/Select";
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

// TODO: Create separate component for http requests 

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

  const typeOfFoodHandler = (event) => {
    dispatch({ type: event.target.value });
  };

  const dataHandler = (event) => {
    // console.log(event.target.id)
    dispatchForm({ type: event.target.id, value: event.target.value });
    // console.log(formState.diameter)
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let requestOptions = {};
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({});

    if (state.typeSelected === 1) {
      raw = JSON.stringify({
        name: formState.name,
        preparation_time: formState.pereparationTime,
        type: "pizza",
        diameter: +formState.diameter,
        no_of_slices: +formState.noOfSlices,
      });
    } else if (state.typeSelected === 2) {
      console.log(formState.pereparationTime)
      raw = JSON.stringify({
        name: formState.name,
        preparation_time: formState.pereparationTime,
        type: "soup",
        spiciness_scale: +formState.spiciness
      });
    } else if (state.typeSelected === 3) {
      raw = JSON.stringify({
        name: formState.name,
        preparation_time: formState.pereparationTime,
        type: "sandwich",
        slices_of_bread: +formState.slicesOfBread
      });
    } else return;

    requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log(requestOptions);
    fetch("https://frosty-wood-6558.getsandbox.com:443/dishes", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <Card>
      {/* <h2> Dish form</h2> */}
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
            state.typeSelected === 1 && (
              <Fragment>
                <Input
                  label="Number of slices"
                  onChange={dataHandler}
                  input={{ id: "noOfSlices", type: "number", step: "1", min: "1"}}
                />
                <Input
                  label="Diameter (cm)"
                  placeholder="30"
                  onChange={dataHandler}
                  input={{ id: "diameter", type: "number", step: "0.1", min: "0"}}
                />
              </Fragment>
            )
          }
          {
            // Soup
            state.typeSelected === 2 && <SpicinessBar onChange={dataHandler}/>
          }

          {
            //Sandwich
            state.typeSelected === 3 && (
              <Input
                label="Slices of bread "
                onChange={dataHandler}
                input={{
                  id: "slicesOfBread",
                  type: "number",
                  min: "0",
                  step: "1",
                  placeholder: 1
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
