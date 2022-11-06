import { Button, Content, ContextualHelp, Flex, Grid, Heading, TextField, View } from "@adobe/react-spectrum";
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
      <Grid areas={["button"]} flex={true} height="100%" width="100%">
        <Flex justifyContent="center" alignSelf="center" gridArea="button">
          <Button variant="cta" UNSAFE_style={{ background: `${props.color}` }}>
            button
          </Button>
          <ContextualHelp variant="info">
            {/* <Content> */}
            <Heading width={"size-6000"}>
              <CodeContainer codeToPrint={codeToPrint} />
            </Heading>
            {/* </Content> */}
          </ContextualHelp>
        </Flex>
      </Grid>
    </View>
  );
}

export default CustomButton;