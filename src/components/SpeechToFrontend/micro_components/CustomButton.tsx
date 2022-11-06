import { Button, View } from "@adobe/react-spectrum";
import CodeContainer from "./CodeContainer";

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

  return (
      <View>
        <Button variant='cta' UNSAFE_style={{background: `${props.color}`}}>
          button
        </Button>
        <CodeContainer codeToPrint={codeToPrint} />
      </View>

    )
}

export default CustomButton;