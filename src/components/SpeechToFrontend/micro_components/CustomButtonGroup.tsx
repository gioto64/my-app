import { Button, ButtonGroup, View } from "@adobe/react-spectrum";
import CodeContainer from "./CodeContainer";

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

  return (
    <View>
      <ButtonGroup orientation="vertical">
        <Button variant="secondary">No, thanks</Button>
        <Button variant="secondary">Remind me later</Button>
        <Button variant="primary">Rate Now</Button>
      </ButtonGroup>
      <CodeContainer codeToPrint={codeToPrint} />
    </View>
  );
}

export default CustomButtonGroup;