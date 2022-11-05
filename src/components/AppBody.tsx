import { Provider as ProviderRedux } from "react-redux";
import { View } from "@adobe/react-spectrum";
import Snake from "./SnakeGame/Snake";
import Speech from "./SpeechToFrontend/Speech";
import snakeStore from "./SnakeGame/store/snake_store";
import speechStore from "./SpeechToFrontend/store/speech_store";

interface AppBodyProps {
  tabId,
}

function AppBody(props: AppBodyProps) {
  const color = props.tabId === 1 ? "purple-600" :
                props.tabId === 2 ? "orange-600" :
                "green-600"
  return ( 
    props.tabId === 1 ? 
      <ProviderRedux store={snakeStore}>    
        <Snake />
      </ProviderRedux>
    : props.tabId === 2 ? 
        <ProviderRedux store={speechStore}>    
          <Speech />  
        </ProviderRedux>  
    : <View backgroundColor={color} gridArea="content" />
  );
}

export default AppBody;