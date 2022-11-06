import { Provider as ProviderRedux } from "react-redux";
import { Grid, Header, View } from "@adobe/react-spectrum";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLink } from "../SpeechToFrontend/store/actions/speech_actions";
import CanvasBoard from "./CanvasBoard";
import Guide from "./Guide";
import ScoreCard from "./ScoreCard";
import snakeStore from "../SnakeGame/store/snake_store";

const Snake = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLink('/snippets/SnakeGame.zip'));
    return () => {
      dispatch(setLink(''));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <ProviderRedux store={snakeStore}>    
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
    </ProviderRedux>
  );
}

export default Snake;