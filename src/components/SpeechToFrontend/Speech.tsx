import { View } from "@adobe/react-spectrum";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createButton } from "./common/utils";
import Components from "./Components";
import CustomButton from "./micro_components/CustomButton";
import { addComponent, removeComponent } from "./store/actions/speech_actions";
import { DataGlobalState } from "./store/reducers/speech_reducers";

const Speech = () => {
  const data = useSelector((state: DataGlobalState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addComponent(createButton({
      name: "button 2",
      text: "meow meow",
    })));  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data.content.body.length === 2) {
      dispatch(removeComponent('button 2'));
    }
  }, [data]);

  console.log(data);


  return (
    <View gridArea="content" flex={true}>
      <CustomButton text='test' color='green'/>
    </View>
  )
}

export default Speech;