import { Button, ButtonGroup } from "@adobe/react-spectrum";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showCode } from "../store/actions/speech_actions";

interface CustomButtonGroupInterface {
    color?: string;
    text?: string;
}

const CustomButtonGroup = (props: CustomButtonGroupInterface) => {
  const codeToPrint = `
import { Button, ButtonGroup } from "@adobe/react-spectrum";
const CustomButtonGroup = () => {
  return (
    <ButtonGroup orientation="vertical">
      <Button variant="secondary">No, thanks</Button>
      <Button variant="secondary">Remind me later</Button>
      <Button variant="primary">Rate Now</Button>
    </ButtonGroup>
  );
}`;
  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(showCode(codeToPrint));
    return () => {dispatch(showCode(''));}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ButtonGroup orientation="vertical">
      <Button variant="secondary">No, thanks</Button>
      <Button variant="secondary">Remind me later</Button>
      <Button variant="primary">Rate Now</Button>
    </ButtonGroup>
  );
}

export default CustomButtonGroup;