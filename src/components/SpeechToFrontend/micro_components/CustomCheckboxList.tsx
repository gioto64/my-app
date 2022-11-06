import { Item, ListView, View } from "@adobe/react-spectrum";
import CodeContainer from "./CodeContainer";

interface CustomCheckboxListInterface {
    color?: string;
    text?: string;
}

const CustomCheckboxList = (props: CustomCheckboxListInterface) => {
  const codeToPrint = `
import { Item } from "@adobe/react-spectrum";
const CustomCheckboxList = () => {
  return (
    <ListView
      selectionMode="multiple"
      aria-label="Static ListView items example"
      maxWidth="size-6000"
    >
      <Item>Item1</Item>
      <Item>Item2</Item>
      <Item>Item3</Item>
      <Item>Item4</Item>
      <Item>Item5</Item>
    </ListView>
  );
}`;

  return (
      <View>
        <ListView
          selectionMode="multiple"
          aria-label="Static ListView items example"
          maxWidth="size-6000"
        >
          <Item>Item1</Item>
          <Item>Item2</Item>
          <Item>Item3</Item>
          <Item>Item4</Item>
          <Item>Item5</Item>
        </ListView>
        <CodeContainer codeToPrint={codeToPrint} />
      </View>
    )
}

export default CustomCheckboxList;