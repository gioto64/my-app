import { ActionButton, Button, Flex, TextArea, View } from "@adobe/react-spectrum";
import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./styles/SpeechMenu.css";
import MicOffRoundedIcon from "@mui/icons-material/MicOffRounded";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import { MotionConfig, motion } from "framer-motion";
import { addText } from "./store/actions/speech_actions";
import { useDispatch } from "react-redux";

export const SpeechMenu = ({ gridName, hidden }) => {
  const [words, setWords] = useState("");
  const dispatch = useDispatch();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    dispatch(addText(transcript));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript])

  useEffect(() => {
    if (hidden && listening) {
      SpeechRecognition.stopListening();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <Flex gridArea="speech" justifyContent="center">
      <Flex
        isHidden={hidden}
        UNSAFE_style={{ backgroundColor: "#494949" }}
        columnGap={10}
        direction="row"
        alignContent={"center"}
        justifyContent={"center"}
        width={"100%"}
      >
        <ActionButton
          UNSAFE_className={"mic-button ".concat(
            listening ? "mic-button-active" : "mic-button-inactive"
          )}
          height={"size-1000"}
          width={"size-1000"}
          alignSelf="center"
          justifySelf="center"
          onPress={() =>
            listening
              ? SpeechRecognition.stopListening()
              : SpeechRecognition.startListening({
                  continuous: true,
                  language: "en-EN",
                })
          }
        >
          {listening ? (
            <MicRoundedIcon className="icon" />
            ) : (
              <MicOffRoundedIcon className="icon" />
          )}
        </ActionButton>
        <TextArea
          UNSAFE_style={{ border: 0, outline: 0 }}
          value={transcript}
          onChange={setWords}
          isReadOnly
          alignSelf="center"
          justifySelf="center"
          width={"30%"}
        />
        <ActionButton
          UNSAFE_className={"square-button"}
          height={"size-800"}
          width={"size-1200"}
          onPress={() => resetTranscript()}
          alignSelf="center"
          justifySelf="center"
        >
          <h2> Clear </h2>
        </ActionButton>
      </Flex>
      {/* </View> */}
    </Flex>
  );
};