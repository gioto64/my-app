
import { View } from "@adobe/react-spectrum";

interface AppBodyProps {
  tabId,
}

function AppBody(props: AppBodyProps) {
  const color = props.tabId === 1 ? "purple-600" :
                props.tabId === 2 ? "orange-600" :
                "green-600"
  return (
    <View backgroundColor={color} gridArea="content" />
  );
}

export default AppBody;