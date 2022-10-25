import {
  Button,
  Flex,
  Item,
  TabList,
  TabPanels,
  Tabs,
  View,
  Text,
} from "@adobe/react-spectrum";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface TabItem {
  id: number;
  name: string;
  path: string;
}

interface LeftRailProps {
  isHidden: boolean;
  setTabId: React.Dispatch<React.SetStateAction<number>>;
}

function LeftRail(props: LeftRailProps) {
  const tabs = [
    {
      id: 1,
      name: "Founding of Rome",
      path: "rome",
    },
    {
      id: 2,
      name: "Monarchy and Republic",
      path: "republic",
    },
    {
      id: 3,
      name: "Empire",
      path: "empire",
    },
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
        onSelectionChange={(key: number) => {
          props.setTabId(key);
        }}
      >
        <TabList>
          {(item: TabItem) => (
            <Item>
              <Link to={item.path}> {item.name}</Link>
            </Item>
          )}
        </TabList>
      </Tabs>
    </View>
  );
}

export default LeftRail;
