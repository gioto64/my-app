import { ActionButton, Button, Divider, Flex, View } from "@adobe/react-spectrum";
import { useState } from "react";
import CodeContainer from "./SpeechToFrontend/micro_components/CodeContainer";
import "./SpeechToFrontend/styles/SpeechMenu.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


function AppFooter({gridArea, modifyRows}) {

  const [isMenuOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      modifyRows(["1fr", "15fr", "1fr"]);
      
    }
    else {
      modifyRows(["1fr", "15fr", "5fr"]);
    }
    setMenu(!isMenuOpen);
  }

    return (
      <Flex gridArea={gridArea} flex={true} direction="column" gap={5} >
        <Divider />
        <ActionButton
        
          UNSAFE_className={"square-button"}
          height={"size-500"}
          width={"size-1200"}
          onPress={() => {toggleMenu()}}
          alignSelf="center"
          justifySelf="center">
         {isMenuOpen ? <KeyboardArrowDownIcon /> : <h3> Show code </h3>} 
        </ActionButton>
        {/* {isMenuOpen ? <CodeContainer /> : null} */}
      </Flex>
    );
  }

  AppFooter.defaultProps = {
    gridArea: "footer",
    modifyRows: () => {},
  };
  
  export default AppFooter;