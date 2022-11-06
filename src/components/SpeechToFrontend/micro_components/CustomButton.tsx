import { Button, Flex, Grid, View } from "@adobe/react-spectrum";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLink, showCode } from "../store/actions/speech_actions";

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
    dispatch(setLink('/snippets/CustomButton.tsx'));
    return () => {
      dispatch(showCode(''));
      dispatch(setLink(''));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Grid areas={["button"]} flex={true} height="100%" width="100%">
        <Flex justifyContent="center" alignSelf="center" gridArea="button">
          <Button variant="cta" UNSAFE_style={{ background: `${props.color}` }}>
            button
          </Button>
        </Flex>
      </Grid>
    </View>
  );
}

export default CustomButton;