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
      name: 'Snake',
    },
    {
      id: 2,
      name: 'Speech to Frontend',
    },
    { 
      id: 3, 
      name: 'Empire', 
    }
  ];
    
  return (
    <View 
      backgroundColor="gray-400" 
      isHidden={props.isHidden}
      flex={true}
      >
      <Tabs
        orientation="vertical"
        aria-label="History of Ancient Rome"
        items={tabs}
        flex={true}
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