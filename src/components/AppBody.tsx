
import { View } from "@adobe/react-spectrum";
import Snake from "./SnakeGame/Snake";

interface AppBodyProps {
  tabId,
}

function AppBody(props: AppBodyProps) {
  const color = props.tabId === 1 ? "purple-600" :
                props.tabId === 2 ? "orange-600" :
                "green-600"
  return (
    props.tabId === 1 ? <Snake />  
                      : <View backgroundColor={color} gridArea="content" />
  );
}

export default AppBody;