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
}
