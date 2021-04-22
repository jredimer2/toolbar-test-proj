import React, { useEffect, Component, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import withContext from "../contexts/WithContext";
import BackButton from "../components/BackButton";

let fetchValues = [];

// The new option 1 values set in test.js should still be visible here via Context API
function Test3(props) {
  const [testname, setTestName] = useState();

  useEffect(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const fetchValues = await res.json();
    console.log(">>>> useEffect  fetchValues =", fetchValues);
    setTestName(fetchValues.name);
  }, [testname]);

  console.log(">>>>> Test3 fetchValues =", fetchValues);

  return (
    <div>
      <BackButton />
      <h1>{testname}</h1>
      <h1>{fetchValues.email}</h1>
      <h1>{fetchValues.website}</h1>
    </div>
  );
}

export default withContext(Test3);
