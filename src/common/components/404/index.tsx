import React, { Component } from "react";

import { History } from "history";

import { Link } from "react-router-dom";

import Meta from "../meta";
import { Global } from "../../store/global/types";

interface Props {
  history: History;
  global: Global;
}

interface State {
  loaded: boolean;
}

export class NotFound extends Component<Props, State> {
  state: State = {
    loaded: false
  };

  componentDidMount() {
    this.setState({ loaded: true });
  }

  goBack = () => {
    const { history } = this.props;

    history.goBack();
  };

  render() {
    const { loaded } = this.state;
    if (!loaded) {
      return "";
    }

    const metaProps = {
      title: "404"
    };

    const { history } = this.props;

    // @ts-ignore make ide happy. code compiles without error.
    const entries = history.entries || {};
    // @ts-ignore
    const index = history.index || 0;

    const canGoBack = !!entries[index - 1];

    return (
      <>
        <Meta {...metaProps} />
        <div className="not-found-404">
          <h1>404: This page doesn't exist.</h1>
          <p className="links">
            {canGoBack && (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  this.goBack();
                }}
              >
                Back
              </a>
            )}
            <Link to="/">Home</Link>
          </p>
        </div>
      </>
    );
  }
}

export default (p: Props) => {
  const props = {
    history: p.history,
    global: p.global
  };

  return <NotFound {...props} />;
};
