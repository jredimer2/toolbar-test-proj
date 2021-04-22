import React from "react";
import App from "next/app";
import { AppProvider, Navigation, Frame, TopBar } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import GlobalContextProvider from "../contexts/GlobalContext";
import Nav from "../components/Nav";
import { ArrowLeftMinor } from "@shopify/polaris-icons";
import "../styles/Nav.css";
import Icon from "@mdi/react";
import {
  mdiAlien,
  mdiAlienOutline,
  mdiBroadcast,
  mdiCameraIris,
  mdiChatProcessingOutline,
  mdiCommentProcessingOutline,
  mdiDiamondStone,
  mdiDotsVerticalCircle,
  mdiSync,
  mdiSyncCircle,
  mdiVolumeHigh,
  mdiSurroundSound,
  mdiVolleyball,
} from "@mdi/js";


class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dharma",
      detail: "Jaded Pixel",
      initials: "D",
    };
  }
  // navigationMarkup2() {

  // }
  handleTopbarUserName = (userDetails) => {
    console.log(userDetails);
    this.setState({ ...userDetails });
  };

  render() {
    console.log(this.state);
    const { Component, pageProps } = this.props;

    const userMenuMarkup = (
      <TopBar.UserMenu
        actions={[
          {
            items: [{ content: "Back to Shopify", icon: ArrowLeftMinor }],
          },
          {
            items: [{ content: "Community forums" }],
          },
        ]}
        name={this.state.name}
        detail={this.state.detail}
        initials={this.state.initials}
      />
    );

    // F0FFFF
    const secondaryMenuMarkup = (
      <TopBar.Menu
        activatorContent={
          <a className="logo" href="/">
            <Icon path={mdiAlien} size={1.4} horizontal color="#FF0000" />
            Hiric
          </a>
        }
      />
    );

    return (
      <>
        <GlobalContextProvider>
          <AppProvider i18n={translations}>
            <Frame
              topBar={
                <TopBar
                  showNavigationToggle
                  userMenu={userMenuMarkup}
                  secondaryMenu={secondaryMenuMarkup}
                  onNavigationToggle={() => {
                    document
                      .getElementById("AppFrameNav")
                      .classList.toggle("activeNav");
                  }}
                />
              }
              navigation={<Nav />}
            >
              <Component
                {...pageProps}
                handleTopbarUserName={this.handleTopbarUserName}
              />
            </Frame>
          </AppProvider>
        </GlobalContextProvider>
      </>
    );
  }
}

export default MyApp;
