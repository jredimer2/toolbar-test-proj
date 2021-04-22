import React, { useState } from "react";
import {
  HomeMajor,
  CustomersMajor,
  MarketingMajor,
  OrdersMajor,
  ProductsMajor,
  QuickSaleMajor,
} from "@shopify/polaris-icons";
import { Navigation } from "@shopify/polaris";
import withContext from "../contexts/WithContext";
import "@shopify/polaris/dist/styles.css";
import { useRouter } from 'next/router';

const Nav = ({ context }) => {
  console.log(context);
  let _id = "12345";
  const serializedState = context.state;
  const router = useRouter();
  console.log("%%%%%%%%%%%%%%%%%%% NAV  _id =", _id);
  console.log("%%%%%%%%%%%%%%%%%%% NAV  serializedState =", serializedState);
  console.log("%%%%%%%%%%%%%%%%%%% NAV  serializedState.id =", serializedState.id);

  //_id = '890'
  if (serializedState) {
    if (serializedState.hasOwnProperty("id")) {
      _id = serializedState.id; // Previously this was hardcoded to '456', now I'm fetching value from context
      // Also I noticed that whatever value I hardcode to _id, it also appears in Session Storage of browser.
      // How does it do that?
    } else {
    }
  } else {
  }

  const NavCollapse = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      document.getElementById("AppFrameNav").classList.toggle("activeNav");
    }
  };

  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            // url: "/test",
            onClick: () => {
              router.push('/test')
              NavCollapse()
            },
            label: "Update User Details",
            icon: CustomersMajor,
          },
          {
            onClick: () => {
              router.push('/test2')
              NavCollapse()
            },
            // url: "/test2",
            label: "Test2",
            icon: MarketingMajor,
          },
          {
            onClick: () => {
              router.push('/test3')
              NavCollapse()
            },
            // url: "/test3",
            label: "Test3",
            icon: QuickSaleMajor,
            badge: "15 new",
          },
          {
            onClick: () => {
              router.push('/client/' + _id)
              NavCollapse()
            },
            // url: "/client/" + _id,
            label: "Client :id",
            icon: ProductsMajor,
          },
        ]}
      />
    </Navigation>);
};

export default withContext(Nav);
