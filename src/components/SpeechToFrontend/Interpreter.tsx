import CustomButton from "./micro_components/CustomButton";
import CustomButtonGroup from "./micro_components/CustomButtonGroup";
import CustomCheckboxList from "./micro_components/CustomCheckboxList";
import CustomSlidingMenu from "./micro_components/CustomSlidingMenu";
import Snake from "../SnakeGame/Snake";
import { SpeechMenu } from "./SpeechMenu";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber } from "./store/actions/speech_actions";
import { DataGlobalState } from "./store/reducers/speech_reducers";


interface InterpreterProps {
    text: string,
    self?: boolean,
}

const Interpreter = (props: InterpreterProps) => {
  const dispatch = useDispatch();
  const selection = useSelector((state: DataGlobalState) => state.selection);

  const isButton = props.text.toLowerCase().indexOf("button") !== -1;
  const isSlidingMenu = props.text.toLowerCase().indexOf("sliding") !== -1 && props.text.toLowerCase().indexOf("menu") !== -1;
  const isCheckboxList = props.text.toLowerCase().indexOf("list") !== -1 && props.text.toLowerCase().indexOf("checkbox") !== -1;
  const isButtonGroup = props.text.toLowerCase().indexOf("button") !== -1 && props.text.toLowerCase().indexOf("group") !== -1;
  const isSnake = props.text.toLowerCase().indexOf("snake") !== -1;
  const isSameApp = props.text.toLowerCase().indexOf("same") !== -1 && props.text.toLowerCase().indexOf("app") !== -1;
  
  const isGreen = props.text.toLowerCase().indexOf('green') !== -1;
  const isRed = props.text.toLowerCase().indexOf('red') !== -1;
  const isBlue = props.text.toLowerCase().indexOf('blue') !== -1;

  let color = undefined;
  if (isGreen)
    color = 'green';
  else if (isRed)
    color = 'red';
  else
    color = 'blue';

  let aux = isButton || isSlidingMenu || isCheckboxList || isButtonGroup || isSnake || isSameApp;
  let number: number = Number(aux);
  if (isButton && !isButtonGroup && !isGreen && !isRed && !isGreen && !isBlue)
    ++number;

  console.log(number);

  useEffect(() => {
    dispatch(addNumber(number));
    return () => {
      dispatch(addNumber(0));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  if (number === 2) {
    console.log(selection);
    if (selection === 0) {
      return (
        <CustomButton color={color}/>
      )
    } else {
      return (
        <CustomButtonGroup color={color}/>
      )
    }
  }

  return (
      isSlidingMenu? <CustomSlidingMenu color={color}/>
      : isButtonGroup ? <CustomButtonGroup color={color}/>
      : isButton ? <CustomButton color={color}/>
      : isCheckboxList ? <CustomCheckboxList color={color}/>
      : isSnake ? <Snake />
      : (isSameApp && !props.self)?
        <SpeechMenu gridName={'self'} hidden={false} />
      : <></>
  );
}

export default Interpreter;