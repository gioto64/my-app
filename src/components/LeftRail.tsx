import { Button, Flex, Item, TabList, TabPanels, Tabs, View, Text } from "@adobe/react-spectrum";
import React from "react";
import { useState } from "react";
import { TripleGripper } from "@adobe/react-spectrum-ui"
import { Pin } from "@adobe/react-spectrum-workflow"
interface TabItem {
  id: number,
  name: string,
}

interface LeftRailProps {
  isHidden: boolean,
}

function LeftRail(props : LeftRailProps) {
  const tabs = [
    {
      id: 1,
      name: 'Founding of Rome',
    },
    {
      id: 2,
      name: 'Monarchy and Republic',
    },
    { 
      id: 3, 
      name: 'Empire', 
    }
  ];
  
  const [tabId, setTabId] = React.useState(1);
  
  return (
    <View 
      backgroundColor="gray-100" 
      gridArea="sidebar"
      isHidden={props.isHidden}
      >
 
      <p>Current tab id: {tabId}</p>
      <Tabs
        orientation="vertical"
        aria-label="History of Ancient Rome"
        items={tabs}
        onSelectionChange={(key: number) => {setTabId(key)}}
      >
        <TabList>
          {(item: TabItem) => (
            <Item>
              {item.name}
            </Item>
          )}
        </TabList>
      </Tabs>
    </View>
  );
}

export default LeftRail;