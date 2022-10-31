import { Button, Flex } from "@adobe/react-spectrum";

interface RestartGameProps {
  reset: () => void,
  isHidden: boolean,
};

const RestartGame = ({ reset, isHidden }: RestartGameProps) => {
  return (
    <Flex zIndex={3} height='100%' width='100%' alignItems={'center'} justifyContent={'center'}>
      <Button variant='cta' onPress={() => {reset()}}>
        Restart
      </Button>
    </Flex>
  )
}

export default RestartGame;