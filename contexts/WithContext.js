import React from "react";
import { GlobalContext } from "./GlobalContext";

export default function withContext(Component) {
  return function contextComponent(props) {
    return (
      <GlobalContext.Consumer>
        {(context) => <Component {...props} context={context} />}
      </GlobalContext.Consumer>
    );
  };
}
