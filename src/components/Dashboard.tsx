import {
  defaultTheme,
  Flex,
  Grid,
  Provider,
  Divider,
  View,
} from "@adobe/react-spectrum";
import { Provider as ProviderRedux } from "react-redux";
import { useState } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import { SpeechMenu } from "./SpeechMenu";
import Speech from "./SpeechToFrontend/Speech";
import speechStore from "./SpeechToFrontend/store/speech_store";
import { motion } from "framer-motion";

export const Dashboard = () => {
  const [layout, setLayout] = useState([
    "header",
    "content",
    "footer",
  ]);

  const [rows, setRows] = useState(["1fr", "15fr", "1fr"]);
  const [isMenuOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    if (isMenuOpen) {
      setLayout([
        "header",
        "content",
        "footer"
      ]);
	  setRows(["1fr", "15fr", "1fr"]);
    } else {
      setLayout([
        "header",
        "speech",
        "content",
        "footer",
      ]);
	  setRows(["1fr", "3fr", "12fr", "1fr"]);
    }
    setMenu(!isMenuOpen);
  };

  return (
    <ProviderRedux store={speechStore}>
      <Provider theme={defaultTheme} flex={true}>
        <Grid areas={layout} rows={rows} columns={["1fr"]} height="100vh">
          <Flex gridArea="header" flex={true} direction="column">
            <AppHeader toggleMenu={toggleMenu} />
            <Divider />
          </Flex>
          <SpeechMenu gridName="speech" hidden={!isMenuOpen} />
            <View gridArea="content">
              <Speech />
            </View>
          <Flex gridArea="footer" flex={true} direction="column">
            <Divider />
            <AppFooter />
          </Flex>
        </Grid>
      </Provider>
    </ProviderRedux>
  );
};
