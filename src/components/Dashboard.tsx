import {
  defaultTheme,
  Flex,
  Grid,
  Provider,
  Divider,
  View,
} from "@adobe/react-spectrum";
import { useState } from "react";
import { Provider as ProviderRedux } from "react-redux";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import { SpeechMenu } from "./SpeechToFrontend/SpeechMenu";
import Speech from "./SpeechToFrontend/Speech";
import speechStore from "./SpeechToFrontend/store/speech_store";
import { motion, MotionConfig } from "framer-motion";

export const Dashboard = () => {
  const [layout, setLayout] = useState(["header", "content", "footer"]);

  const [rows, setRows] = useState(["1fr", "15fr", "1fr"]);
  const [isMenuOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    if (isMenuOpen) {
      setLayout(["header", "content", "footer"]);
      setRows(["1fr", "15fr", "1fr"]);
    } else {
      setLayout(["header", "speech", "content", "footer"]);
      setRows(["1fr", "3fr", "12fr", "1fr"]);
    }
    setMenu(!isMenuOpen);
  };

  return (
      <ProviderRedux store={speechStore}>
        <Provider theme={defaultTheme} flex={true} colorScheme="dark">
          <Grid areas={layout} rows={rows} columns={["1fr"]} height="100vh">
            <Flex gridArea="header" flex={true} direction="column">
              <AppHeader toggleMenu={toggleMenu} />
              <Divider />
            </Flex>
            <SpeechMenu gridName="speech" hidden={!isMenuOpen} />
            <View
              gridArea="content"
              UNSAFE_style={{ backgroundColor: "#444444" }}
            >
              <Speech />
            </View>
            <AppFooter gridArea={"footer"} modifyRows={setRows}/>
          </Grid>
        </Provider>
      </ProviderRedux>
  );
};
