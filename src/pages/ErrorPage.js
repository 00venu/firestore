import React from "react";
import { useDispatch } from "react-redux";
import { errorAction } from "../store/action";

const ErrorPage = (props) => {
  const dispatch = useDispatch();
  const redirectHandler = () => {
    dispatch(errorAction(false));
    props.history.push("/");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ color: "red", padding: "10px 0", display: "block" }}>
        Error Occurred!
      </span>
      <div>
        <button onClick={redirectHandler}>Redirect to home</button>
      </div>
    </div>
  );
};

export default ErrorPage;
