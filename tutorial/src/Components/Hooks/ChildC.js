import React, { useContext } from "react";
import { data, data1 } from "./App";

function ChildC() {

    const name= useContext(data);
    const email= useContext(data1);
  return (
    <>
    <h1>Hi my name is {name} and my email id is {email}</h1>
    </>
  );
}
export default ChildC;
