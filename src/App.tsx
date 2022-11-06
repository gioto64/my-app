import {Text, Button, defaultTheme, Flex, Grid, Header, View, Provider, Divider} from '@adobe/react-spectrum';
import { useState } from 'react';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import LeftRail from './components/LeftRail';

function App() {
  const [tabId, setTabId] = useState(1);
  const [layout, setLayout] = useState([
    'header  header',
    'content content',
    'footer  footer']);
  const [isMenuOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    if (isMenuOpen) {
      setLayout([
        'header header',
        'content content',
        'footer footer']);
    } else {
      setLayout([
        'header  header',
        'sidebar content',
        'footer  footer']);
    }
    setMenu(!isMenuOpen);
  }
  
  return (
    <Provider theme={defaultTheme} flex={true}>
      <Grid
        areas={layout}
        columns={['1fr', '7fr']}
        rows={['1fr', '15fr', '1fr']}
        height="100vh"
        >
        <Flex gridArea="header" flex={true} direction="column">
          <AppHeader toggleMenu = {toggleMenu}/>
          <Divider />
        </Flex>
        <Flex gridArea="sidebar" flex={true}> 
          <LeftRail setTabId={setTabId} isHidden={!isMenuOpen}/>
          <Divider isHidden={!isMenuOpen} orientation="vertical"/>
        </Flex>
        <AppBody tabId={tabId} />
        <Flex gridArea="footer" flex={true} direction="column">
          <Divider />
          <AppFooter onToggle={toggleMenu}/>
        </Flex>
      </Grid>
    </Provider>
  );
}
export default App;