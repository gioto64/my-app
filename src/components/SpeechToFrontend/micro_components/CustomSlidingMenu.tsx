import { Item, TabList, Tabs, View } from "@adobe/react-spectrum";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLink, showCode } from "../store/actions/speech_actions";

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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCode(codeToPrint));
    dispatch(setLink('/snippets/CustomSlidingMenu.tsx'));
    return () => {
      dispatch(showCode(''));
      dispatch(setLink(''));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <View>
      <Hamburger onToggle={() => {setHidden(!isHidden)}} />
      <View 
        backgroundColor="gray-400" 
        isHidden={isHidden}
        flex={true}
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
    </View>
  );
}

export default CustomSlidingMenu;