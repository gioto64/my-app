import {Text, Button, defaultTheme, Flex, Grid, Header, Provider, View} from '@adobe/react-spectrum';
import { useState } from 'react';
import { TripleGripper } from "@adobe/react-spectrum-ui"
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import LeftRail from './components/LeftRail';
import Hamburger from 'hamburger-react'
import { LoginPage } from './components/pages/LoginPage';

function App() {
  const [tabId, setTabId] = useState(1);
  const [layout, setLayout] = useState([
    'header  header',
    'content content',
    'footer  footer']);
  
  const [isLeftRailOpen, setLeftRail] = useState(false);

  return (
    <Provider theme={defaultTheme} flex = {true}>
      <LoginPage />
    </Provider>
  );
}

export default App;