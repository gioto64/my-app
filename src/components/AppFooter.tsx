import { ActionButton, Button, Divider, Flex, View } from "@adobe/react-spectrum";
import { useState } from "react";
import CodeContainer from "./SpeechToFrontend/micro_components/CodeContainer";
import "./SpeechToFrontend/styles/SpeechMenu.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


function AppFooter({gridArea, onToggle}) {

  const [isMenuOpen, setMenu] = useState(false);

    return (
      <Flex gridArea={gridArea} flex={true} direction="column" gap={5} >
        <Divider />
        <ActionButton
        
          UNSAFE_className={"square-button"}
          height={"size-500"}
          width={"size-1200"}
          onPress={() => {onToggle(); setMenu(!isMenuOpen)}}
          alignSelf="center"
          justifySelf="center">
         {isMenuOpen ? <KeyboardArrowDownIcon /> : <h3> Show code </h3>} 
        </ActionButton>
        {isMenuOpen ? <CodeContainer /> : <></>}
      </Flex>
    );
  }

  AppFooter.defaultProps = {
    gridArea: "footer",
    modifyRows: () => {},
  };
  
  export default AppFooter;