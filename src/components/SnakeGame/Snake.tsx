import { Flex, Grid } from "@adobe/react-spectrum";
import CanvasBoard from "./CanvasBoard";

const Snake = () => {
  return (

    <Grid justifyContent="center" gridArea="content">
      <CanvasBoard width={1000} height={600}/>
    </Grid>
  );
}

export default Snake;