import { Flex, View } from "@adobe/react-spectrum";
import Hamburger from 'hamburger-react'
interface AppHeaderProps {
  toggleMenu: VoidFunction,
}

function AppHeader(props: AppHeaderProps) {
  return (
    <View backgroundColor="gray-200" flex={true}>
      <Flex justifyContent="left" alignSelf="center">
        <Hamburger  onToggle={() => {props.toggleMenu()}} />
      </Flex>
    </View> 
  );
}

export default AppHeader;