import {
  Button,
  ButtonGroup,
  Flex,
  Icon,
  TextField,
  View,
} from "@adobe/react-spectrum";
import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "../styles/SpeechMenu.css";
import { MicIcon } from "./MicIcon";

export const SpeechMenu = ({ gridName, hidden }) => {
  const [words, setWords] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  //   useEffect(() => {
  //     setWords(words.concat(transcript));
  //   }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <Flex gridArea="speech" flex={true} justifyContent="center">
      <View backgroundColor="gray-400" isHidden={hidden} flex={true}>
        <Flex
          flex={true}
          direction="column"
          alignContent={"center"}
          justifyContent={"center"}
          height={"100%"}
        >
          <p>Microphone: {listening ? "on" : "off"}</p>
          <ButtonGroup alignSelf="center" justifySelf="center" width={"50%"}>
            <Button
              variant="primary"
              onPress={() =>
                SpeechRecognition.startListening({
                  continuous: true,
                  language: "en-US",
                })
              }
            >
              Start
            </Button>
            <TextField
              value={transcript}
              onChange={setWords}
              isReadOnly
              alignSelf="center"
              justifySelf="center"
              width={"100%"}
            />
			<Button variant="primary" onPress={SpeechRecognition.stopListening}> Stop </Button>
          </ButtonGroup>
        </Flex>
		{ /*
          Start
        </button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button
          onClick={() => {
            resetTranscript();
            setWords("");
          }}
        >
          Reset
        </button> */}
        {/* <TextField
          value={transcript}
          isReadOnly
		  width="80%"
        />
        <p>{transcript}</p> */}
      </View>
    </Flex>
  );
};
