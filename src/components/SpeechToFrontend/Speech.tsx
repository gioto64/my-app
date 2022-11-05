import { View } from "@adobe/react-spectrum";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createButton } from "./common/utils";
import Components from "./Components";
import CustomButton from "./micro_components/CustomButton";
import { addComponent, removeComponent } from "./store/actions/speech_actions";
import { DataGlobalState } from "./store/reducers/speech_reducers";
import Interpreter from "./Interpreter";


const Speech = () => {
  const text = useSelector((state: DataGlobalState) => state.text);
  
  return (
    <Interpreter text={text} />
  )
}

export default Speech;