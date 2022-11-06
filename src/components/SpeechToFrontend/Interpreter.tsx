import CustomButton from "./micro_components/CustomButton";
import CustomButtonGroup from "./micro_components/CustomButtonGroup";
import CustomCheckboxList from "./micro_components/CustomCheckboxList";
import CustomSlidingMenu from "./micro_components/CustomSlidingMenu";

interface InterpreterProps {
    text: string,
}

const Interpreter = (props: InterpreterProps) => {
  const isButton = props.text.toLowerCase().indexOf("button") !== -1;
  const isSlidingMenu = props.text.toLowerCase().indexOf("sliding") !== -1 && props.text.toLowerCase().indexOf("menu") !== -1;
  const isCheckboxList = props.text.toLowerCase().indexOf("list") !== -1 && props.text.toLowerCase().indexOf("checkbox") !== -1;
  const isButtonGroup = props.text.toLowerCase().indexOf("button") !== -1 && props.text.toLowerCase().indexOf("group") !== -1;

  return (
      isSlidingMenu? <CustomSlidingMenu />
      : isButtonGroup ? <CustomButtonGroup />
      : isButton ? <CustomButton />
      : isCheckboxList ? <CustomCheckboxList />
      : <></>
  );
}

export default Interpreter;