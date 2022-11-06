import { Button } from "@adobe/react-spectrum";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showCode } from "../store/actions/speech_actions";

interface CustomButtonInterface {
    color?: string;
    text?: string;
}

const CustomButton = (props: CustomButtonInterface) => {
  const codeToPrint = `
import { Button } from "@adobe/react-spectrum";
const CustomButton = () => {
  return (
    <Button variant='cta' UNSAFE_style={{background: ${props.color}}}>
      button
    </Button>
  );
}`;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCode(codeToPrint));
    return () => {dispatch(showCode(''));}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Button variant='cta' UNSAFE_style={{background: `${props.color}`}}>
      button
    </Button>
  )
}

export default CustomButton;