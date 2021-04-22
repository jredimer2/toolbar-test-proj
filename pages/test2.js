import React, { Component } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import withContext from "../contexts/WithContext";
import BackButton from '../components/BackButton'

// The new option 1 values set in test.js should still be visible here via Context API
class Test2 extends Component {
  render() {
    console.log(
      ">>>>> Test2 this.props.context.state =",
      this.props.context.state
    );
    return (
      <>
        <BackButton />
        <h1>Test2 page</h1>
      </>
    );
  }
}

export default withContext(Test2);
