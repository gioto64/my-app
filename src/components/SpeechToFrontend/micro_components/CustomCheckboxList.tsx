import { Item, ListView } from "@adobe/react-spectrum";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showCode } from "../store/actions/speech_actions";

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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCode(codeToPrint));
    return () => {dispatch(showCode(''));}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
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

export default CustomCheckboxList;