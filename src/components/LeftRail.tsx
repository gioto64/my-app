import { Button, Flex, Item, TabList, TabPanels, Tabs, View, Text } from "@adobe/react-spectrum";
import React from "react";
import { useState } from "react";

interface TabItem {
  id: number,
  name: string,
}

interface LeftRailProps {
  isHidden: boolean,
  setTabId:  React.Dispatch<React.SetStateAction<number>>,
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
    
  return (
    <View 
      backgroundColor="gray-100" 
      gridArea="sidebar"
      isHidden={props.isHidden}
      >
 
      <Tabs
        orientation="vertical"
        aria-label="History of Ancient Rome"
        items={tabs}
        onSelectionChange={(key: number) => {props.setTabId(key)}}
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