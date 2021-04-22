import React, { Component, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Page } from "@shopify/polaris";
import { useRouter } from "next/router";
import withContext from "../../contexts/WithContext";

// The new option 1 values set in test.js should still be visible here via Context API
export default function ClientId(props) {
  const { state, setId } = useContext(GlobalContext);
  const [dt, setDT] = useState('init')

  const router = useRouter();
  useEffect(() => {
    console.log(">>>> ClientId  props =", props);
    console.log(">>>> ClientId  state =", state);
    const dateTime = new Date()
    setDT(String(dateTime))
    setId(props.ID);
  }, [props.ID]);

  //console.log('>>>>> Test2 this.props.context.state =', this.props.context.state);
  return (
    <Page
      title
      breadcrumbs={[
        {
          content: "Back",
          onAction: () => {
            router.back();
          },
        },
      ]}
      fullWidth="true"
    >
      <h1>Client Id page  {dt}</h1>
    </Page>
  );
}

ClientId.getInitialProps = async function ({ query }) {
  const id = query.id;

  let returnObj = {};
  returnObj["ID"] = id;
  return returnObj;
};
