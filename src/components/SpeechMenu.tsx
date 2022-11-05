import {
  Button,
  Flex,
  TextArea,
  View,
} from "@adobe/react-spectrum";
import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "../styles/SpeechMenu.css";
import MicOffRoundedIcon from "@mui/icons-material/MicOffRounded";
import MicRoundedIcon from "@mui/icons-material/MicRounded";


export const SpeechMenu = ({ gridName, hidden }) => {
  const [words, setWords] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <Flex gridArea="speech" flex={true} justifyContent="center">
      <View backgroundColor="gray-400" isHidden={hidden} flex={true}>
        <Flex
          columnGap={10}
          direction="row"
          alignContent={"center"}
          justifyContent={"center"}
          height={"100%"}
        >
          <p>Microphone: {listening ? "on" : "off"}</p>
          <Button
            UNSAFE_className={"mic-button ".concat(
              listening ? "mic-button-active" : "mic-button-inactive"
            )}
            height={"size-800"}
            width={"size-800"}
            alignSelf="center"
            justifySelf="center"
            variant="primary"
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
              <MicOffRoundedIcon className="icon"/>
            ) : (
              <MicRoundedIcon className="icon" />
            )}
          </Button>
          <TextArea
            value={transcript}
            onChange={setWords}
            isReadOnly
            alignSelf="center"
            justifySelf="center"
            flex={2}
          />
          <Button
            variant="primary"
            onPress={() => alert("teaca")}
            alignSelf="center"
            justifySelf="center"
          >
            Build
          </Button>
        </Flex>
      </View>
    </Flex>
  );
};
