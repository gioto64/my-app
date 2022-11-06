import { ActionButton, Divider, Flex } from "@adobe/react-spectrum";
import { useState } from "react";
import CodeContainer from "./SpeechToFrontend/micro_components/CodeContainer";
import "./SpeechToFrontend/styles/SpeechMenu.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DataGlobalState } from "./SpeechToFrontend/store/reducers/speech_reducers";
import { useSelector } from "react-redux";

function AppFooter({gridArea, onToggle}) {
  const code = useSelector((state: DataGlobalState) => state.code);
  
  const [isMenuOpen, setMenu] = useState(false);

    return (
      <Flex 
        isHidden={code === ''}
        gridArea={gridArea} 
        flex={true} 
        direction="column" 
        gap={5}
      >
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