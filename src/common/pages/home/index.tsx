import React, {Component} from "react";
import logo from './react.svg';
import {PageProps, pageMapDispatchToProps, pageMapStateToProps} from "../common";

import './index.css';

class Home extends Component<PageProps> {
  public render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Hivexplorer</h2>
        </div>
        <p className="Home-intro">
          Content
        </p>
      </div>
    );
  }
}

export default Home;
