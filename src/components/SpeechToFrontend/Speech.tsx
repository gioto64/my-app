import { View } from "@adobe/react-spectrum";
import { DataGlobalState } from "./store/reducers/speech_reducers";
import Interpreter from "./Interpreter";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Speech = () => {
  const text = useSelector((state: DataGlobalState) => state.text);
  
  return (
    <View>
      {text === "" ? (
        <h2 style={{textAlign: "center", marginTop: "10%"}}> You can begin by clicking on the burger menu and press the microphone button to speak </h2>
      ) : (
        <Interpreter text={text} />
      )}
    </View>
  );
}

export default Speech;