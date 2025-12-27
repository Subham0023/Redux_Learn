// ! npm install redux react-redux  it is the old way to install redux
// ? npm i react-redux - "Shortcut to install react-redux"
// * npm install @reduxjs/toolkit it is the new way to install redux

// store.js will always be in small letters
// store.js is a javaScript file that is used to create a Redux store for managing the state of a React application.

import React from "react";
import Userinfo from "./Userinfo";
import Button from "./Button";

export default function App() {
  return (
    <div>
      <h1>Hello User!</h1>
      <Userinfo />
      <Button />
    </div>
  );
}
