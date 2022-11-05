import { ActionButton, Button, Flex, TextArea, View } from "@adobe/react-spectrum";
import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./styles/SpeechMenu.css";
import MicOffRoundedIcon from "@mui/icons-material/MicOffRounded";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import { MotionConfig, motion } from "framer-motion";

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
    <Flex gridArea="speech" justifyContent="center">
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        transition={{ duration: 2 }}
      />
      {/* <View
        // UNSAFE_style={{ backgroundColor: "#E0F4F7" }}
        isHidden={hidden}
        flex={true}
      > */}
      <Flex
        isHidden={hidden}
        UNSAFE_style={{ backgroundColor: "#E0F4F7" }}
        columnGap={10}
        direction="row"
        alignContent={"center"}
        justifyContent={"center"}
        width={"100%"}
      >
        <Button
          UNSAFE_className={"mic-button ".concat(
            listening ? "mic-button-active" : "mic-button-inactive"
          )}
          height={"size-1000"}
          width={"size-1000"}
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
            <MicOffRoundedIcon className="icon" />
          ) : (
            <MicRoundedIcon className="icon" />
          )}
        </Button>
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
          onPress={() => alert("teaca")}
          alignSelf="center"
          justifySelf="center"
        >
          <h2> Build </h2>
        </ActionButton>
      </Flex>
      {/* </View> */}
    </Flex>
  );
};