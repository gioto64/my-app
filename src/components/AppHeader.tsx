import { Button, Flex, Grid, repeat, View } from "@adobe/react-spectrum";
import Hamburger from 'hamburger-react'
import { useNavigate } from "react-router-dom";
interface AppHeaderProps {
  toggleMenu: VoidFunction,
}

function AppHeader(props: AppHeaderProps) {
  const navigate = useNavigate();

  return (
    <View backgroundColor="gray-200" flex={true}>
      <Grid 
        areas={[
          'menubutton loginbutton'
        ]}
        flex={true}
        height="100%"
        width="100%"
      >
        <Flex justifyContent="left" alignSelf="center" gridArea="menubutton">
          <Hamburger  onToggle={() => {props.toggleMenu()}} />
        </Flex>
        <Flex justifyContent="right" alignSelf="center" gridArea="loginbutton">
          <Button variant="cta" onPress={() => {navigate("/login")}}>Login</Button>
        </Flex>
      </Grid>  
    </View> 
  );
}

export default AppHeader;