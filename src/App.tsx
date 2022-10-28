import { useState } from 'react';
import { redirect, Route } from 'react-router-dom';

function App() {
  const [tabId, setTabId] = useState(1);
  const [layout, setLayout] = useState([
    'header  header',
    'content content',
    'footer  footer']);
  
  const [isLeftRailOpen, setLeftRail] = useState(false);
  // Create route in index.tsx or using browser router
  // are globally seen paths with browser router

  return <h2> Root component </h2>
}
export default App;