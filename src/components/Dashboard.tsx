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

export const Dashboard = () => {
  const [layout, setLayout] = useState(["header", "content", "footer"]);
  const [rows, setRows] = useState(["1fr", "15fr", "1fr"]);
  const [isMenuOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    if (isMenuOpen) {
      setLayout(["header", "content", "footer"]);
      if (rows[3] === '1fr')
        setRows(["1fr", "15fr", "1fr"]);
      else
        setRows(["1fr", "11fr", "5fr"]);
    } else {
      setLayout(["header", "speech", "content", "footer"]);
      if (rows[2] === '1fr')
        setRows(["1fr", "3fr", "12fr", "1fr"]);
      else
        setRows(["1fr", "3fr", "8fr", "5fr"]);
    }
    setMenu(!isMenuOpen);
  };

  const toggleFooter = () => {
    if (rows.length === 3 && rows[2] === '1fr') {
      setRows(["1fr", "11fr", "5fr"]);
    } else if (rows.length === 3) {
      setRows(["1fr", "15fr", "1fr"]);
    } else if (rows.length === 4 && rows[3] === '1fr') {
      setRows(["1fr", "3fr", "8fr", "5fr"]);
    } else {
      setRows(["1fr", "3fr", "12fr", "1fr"]);
    }
  }

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
            <AppFooter gridArea={"footer"} onToggle={toggleFooter}/>
          </Grid>
        </Provider>
      </ProviderRedux>
  );
};
