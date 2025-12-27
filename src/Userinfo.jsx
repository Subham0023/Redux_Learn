import React from "react";
import { useSelector } from "react-redux";

export default function Userinfo() {
  let data = useSelector((state) => state.user);
  return (
    <div>
      {/* // ? useSelector is used to read the state from the Redux store in a React component. */}
      <h2>User Information:</h2>
      <p>UserName: {data.username}</p>
      <p>Balance: {data.balance}</p>
    </div>
  );
}
