const Submit = (formState, state, setResponseMessage) => {
  //   console.log(props.formState)
  let raw = {
    name: formState.name,
    preparation_time: formState.pereparationTime,
    type: state.typeSelected,
  };
  if (state.typeSelected === "pizza") {
    raw = JSON.stringify({
      ...raw,
      diameter: +formState.diameter,
      no_of_slices: +formState.noOfSlices,
    });
  } else if (state.typeSelected === "soup") {
    raw = JSON.stringify({
      ...raw,
      spiciness_scale: +formState.spiciness,
    });
  } else if (state.typeSelected === "sandwich") {
    raw = JSON.stringify({
      ...raw,
      slices_of_bread: +formState.slicesOfBread,
    });
  } else return;

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://frosty-wood-6558.getsandbox.com:443/dishes",
    requestOptions
  ).then((response) => {
    setResponseMessage(response.ok);
  });
};
export default Submit;
