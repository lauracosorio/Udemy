import React from "react";
// import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      <button
        onClick={(e) => {
          console.log("hola", e);
        }}
      >
        {" "}
        +1{" "}
      </button>
    </>
  );
};

// CounterApp.protoTypes = {
//     value: PropTypes.number.isRequired
// }

export default CounterApp;
