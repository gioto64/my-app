import { Button, Item, TabList, Tabs, View } from "@adobe/react-spectrum";
import Hamburger from "hamburger-react";
import { useState } from "react";
import CodeContainer from "./CodeContainer";

interface CustomSlidingMenuInterface {
    color?: string;
    text?: string;
}

interface TabItem {
  id: number,
  name: string,
}

const CustomSlidingMenu = (props: CustomSlidingMenuInterface) => {
  const codeToPrint = `
import { Item, TabList, Tabs, View } from "@adobe/react-spectrum";
const CustomHamburgerButton = () => {
  const tabs = [
    {
      id: 1,
      name: 'Item 1',
    },
    {
      id: 2,
      name: 'Item 2',
    },
    { 
      id: 3, 
      name: 'Item 3', 
    }
  ];

  const [isHidden, setHidden] = useState(true);

  return (
    <Hamburger onToggle={() => {setHidden(!isHidden)}} />
    <View 
      backgroundColor="gray-400" 
      isHidden={isHidden}
      >
      <Tabs
        orientation="vertical"
        items={tabs}
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
}`;
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

  const [isHidden, setHidden] = useState(true);

  return (
    <View>
      <Hamburger onToggle={() => {setHidden(!isHidden)}} />
      <View 
        backgroundColor="gray-400" 
        isHidden={isHidden}
        flex={true}
        >
        <Tabs
          orientation="vertical"
          aria-label="History of Ancient Rome"
          items={tabs}
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
      <CodeContainer codeToPrint={codeToPrint} />
    </View>
  );
}

export default CustomSlidingMenu;