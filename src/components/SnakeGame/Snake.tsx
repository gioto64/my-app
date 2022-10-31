import { Flex, Grid, Header, View } from "@adobe/react-spectrum";
import CanvasBoard from "./CanvasBoard";
import ScoreCard from "./ScoreCard";

const Snake = () => {
  return (
    <Grid 
      gridArea='content'
      areas={[
        'scorecard',
        'canvas'
      ]}
      flex={true}
      rows={['1fr', '12fr']}
      justifyContent='center'
      >
      <Header justifySelf='center' gridArea='scorecard'>
        <ScoreCard />
      </Header>
      <View width={1000} height={600} gridArea='canvas' backgroundColor={'transparent'}>
        <CanvasBoard width={1000} height={600}/>
      </View>
    </Grid>
  );
}

export default Snake;