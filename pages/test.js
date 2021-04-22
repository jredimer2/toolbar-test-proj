import React, { Component, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Page,
  Link,
  Card,
  DataTable,
  EmptyState,
  Button,
} from "@shopify/polaris";
import { GlobalContext } from "../contexts/GlobalContext";
import BackButton from "../components/BackButton";

export default function Test(props) {
  const { state, setId } = useContext(GlobalContext);

  const router = useRouter();

  useEffect(() => {
    //setOption1({ id: 3, text: "Hello World" });
    console.log(">>>> test.js  props =", props);
    setId("781");
    const userDetails = {
      name: "TEXT 2",
      detail: "Sam Buenos",
      initials: "SM",
    };
    props.handleTopbarUserName(userDetails)
  }, []);

  console.log(">>>>>>>> state =", state);
  const changeTopBarDetails = () => {
    const userDetails = {
      name: "TEXT 1",
      detail: "Coleen Bryant",
      initials: "CB",
    };
    props.handleTopbarUserName(userDetails);
  };

  return (
    <>
      <BackButton />

      {/* Note: when this button is clicked, it should replace 'Dharma 2' with 'TEXT 1', replace 'Jaded Pixel' to 'c', and the initials should be 'CB'
       */}
      <Button onClick={changeTopBarDetails}>
        Update User Details in Toolbar
      </Button>

      <EmptyState
        heading="Test page"
        action={{
          content: "Click to go to next page",
          onAction: () => {
            router.push("/test3");
          },
        }}
        fullWidth
      ></EmptyState>
    </>
  );
}
