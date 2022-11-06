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
}
