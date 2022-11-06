import { Button, ButtonGroup } from "@adobe/react-spectrum";
const CustomButtonGroup = () => {
  return (
    <ButtonGroup orientation="vertical">
      <Button variant="secondary">No, thanks</Button>
      <Button variant="secondary">Remind me later</Button>
      <Button variant="primary">Rate Now</Button>
    </ButtonGroup>
  );
}
