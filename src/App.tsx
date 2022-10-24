import {Text, Button, defaultTheme, Flex, Grid, Header, Provider, View} from '@adobe/react-spectrum';
import { useState } from 'react';
import { TripleGripper } from "@adobe/react-spectrum-ui"
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import LeftRail from './components/LeftRail';
import Hamburger from 'hamburger-react'

function App() {
  const [layout, setLayout] = useState([
    'header  header',
    'content content',
    'footer  footer']);
  
  const [isLeftRailOpen, setLeftRail] = useState(false);
  return (
    <Provider theme={defaultTheme} flex = {true}>
      <Hamburger onToggle={() => {
        if (isLeftRailOpen) {
          setLayout([
            'header header',
            'content content',
            'footer footer']);
        } else {
          setLayout([
            'sidebar  header',
            'sidebar content',
            'sidebar  footer']);
        }
        setLeftRail(!isLeftRailOpen);
      }}/>
      <Grid
        areas={layout}
        columns={['1fr', '3fr']}
        rows={['1fr', '8fr', '1fr']}
        height="100vh"
        gap="size-100">
        <AppHeader />
        <LeftRail isHidden = {!isLeftRailOpen}/>
        <AppBody />
        <AppFooter />
      </Grid>
    </Provider>
  );
}

export default App;