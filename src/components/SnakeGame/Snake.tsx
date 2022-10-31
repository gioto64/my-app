import { Flex, Grid, Header, View } from "@adobe/react-spectrum";
import CanvasBoard from "./CanvasBoard";
import Guide from "./Guide";
import ScoreCard from "./ScoreCard";

const Snake = () => {
  return (
    <Grid 
      gridArea='content'
      areas={[
        'scorecard',
        'canvas',
        'guide'
      ]}
      flex={true}
      rows={['1fr', '5fr', '4fr']}
      justifyContent='center'
      >
      <Header justifySelf='center' gridArea='scorecard'>
        <ScoreCard />
      </Header>
      <View width={1006} height={606} gridArea='canvas' backgroundColor='gray-400'>
        <CanvasBoard width={1000} height={600}/>
      </View>
      <View justifySelf='center' gridArea='guide'>
        <Guide />
      </View>
    </Grid>
  );
}

export default Snake;