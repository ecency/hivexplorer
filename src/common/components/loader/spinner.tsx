import React from "react";
import { LoaderSpinner } from "../../img/svg";
import "./loaders.scss";

const SpinnerEffect = () => {
  return <div className="spinner-loader">{LoaderSpinner()}</div>;
};
export default SpinnerEffect;
