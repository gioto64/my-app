import { Flex, View } from "@adobe/react-spectrum";

export const SpeechMenu = ({gridName, hidden}) => {
	return (
    <Flex gridArea="speech" flex={true}>
      <View backgroundColor="gray-400" isHidden={hidden} flex={true}>
        LOREM IPSUM INSERT BUTTON
      </View>
    </Flex>
  );
}

