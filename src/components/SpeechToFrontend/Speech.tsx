import { View } from "@adobe/react-spectrum";
import { DataGlobalState } from "./store/reducers/speech_reducers";
import Interpreter from "./Interpreter";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Speech = () => {
  const text = useSelector((state: DataGlobalState) => state.text);
  
  return (
    <View>
      <Interpreter text={text} />
    </View>
  )
}

export default Speech;