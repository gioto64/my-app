import { View } from "@adobe/react-spectrum";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseSnake, incrementScore, makeMove, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MOVE_UP, resetGame, stopGame } from "../../store/actions/snake_actions";
import { IGlobalState } from "../../store/reducers/snake_reducers";
import { clearBoard, drawObject, generateRandomPosition, hasSnakeCollided, IObjectBody, outOfBounds } from "./common/utilities";
import RestartGame from "./RestartGame";

export interface ICanvasBoard {
  height: number;
  width: number;
}

const CanvasBoard = ({ height, width }: ICanvasBoard) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState <CanvasRenderingContext2D | null> (null);
  const snake1 = useSelector((state: IGlobalState) => state.snake);
  const disallowedDirection = useSelector((state: IGlobalState) => state.disallowedDirection);
  const dispatch = useDispatch();
	const [pos, setPos] = useState<IObjectBody>(
    generateRandomPosition(width - 20, height - 20)
  );
  const [isConsumed, setConsumed] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (isConsumed) {
      setConsumed(false);
      dispatch(increaseSnake());
      dispatch(incrementScore());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConsumed])

  const moveSnake = useCallback(
    (dx = 0, dy = 0, ds: string) => {
      if (dx > 0 && dy === 0 && ds !== "RIGHT") {
        dispatch(makeMove(dx, dy, MOVE_RIGHT));
      }

      if (dx < 0 && dy === 0 && ds !== "LEFT") {
        dispatch(makeMove(dx, dy, MOVE_LEFT));
      }

      if (dx === 0 && dy < 0 && ds !== "UP") {
        dispatch(makeMove(dx, dy, MOVE_UP));
      }

      if (dx === 0 && dy > 0 && ds !== "DOWN") {
        dispatch(makeMove(dx, dy, MOVE_DOWN));
      }
    },
    [dispatch]
);

  const handleKeyEvents = useCallback(
    (event: KeyboardEvent) => {
      if (disallowedDirection) {
        switch (event.key) {
          case "w":
            moveSnake(0, -20, disallowedDirection);
            break;
          case "s":
            moveSnake(0, 20, disallowedDirection);
            break;
          case "a":
            moveSnake(-20, 0, disallowedDirection);
            break;
          case "d":
            event.preventDefault();
            moveSnake(20, 0, disallowedDirection);
            break;
        }
      } else {
        if (
          disallowedDirection !== "LEFT" &&
          disallowedDirection !== "UP" &&
          disallowedDirection !== "DOWN" &&
          event.key === "d"
        )
          moveSnake(20, 0, disallowedDirection); //Move RIGHT at start
      }
    },
    [disallowedDirection, moveSnake]
  );
  
  useEffect(() => {
    window.addEventListener("keypress", handleKeyEvents);

    return () => {
      window.removeEventListener("keypress", handleKeyEvents);
    };
  }, [disallowedDirection, handleKeyEvents]);

  const resetBoard = useCallback(() => {
    console.log('pula');
    setGameOver(false);
    dispatch(resetGame());
    clearBoard(context);
    drawObject(context, snake1, "#91C483");
    drawObject(
      context,
      [generateRandomPosition(width - 20, height - 20)],
      "#676FA3"
    ); //Draws object randomly
    window.addEventListener("keypress", handleKeyEvents);
  }, [context, dispatch, handleKeyEvents, height, snake1, width]);

  useEffect(() => {
    //Draw on canvas each time  
    console.log(snake1[0]);  
    if (outOfBounds(snake1[0], height - 20, width - 20) || hasSnakeCollided(snake1, snake1[0])) {
      dispatch(stopGame());
      window.removeEventListener("keypress", handleKeyEvents);
      setGameOver(true);
    } else {
      setContext(canvasRef.current && canvasRef.current.getContext("2d")); //store in state variable
      clearBoard(context);
      drawObject(context, snake1, "#91C483"); //Draws snake at the required position
      drawObject(context, [pos], "#676FA3"); //Draws fruit randomly

      if (snake1[0].x === pos?.x && snake1[0].y === pos?.y) {
        setConsumed(true);
        setPos(generateRandomPosition(width - 20, height - 20));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context, pos, snake1]);

  return (
    <>
      <View       
          height={height + 10}
          width={width + 10}
          position='absolute' 
          isHidden={!gameOver} 
          zIndex={2}
          justifySelf='center'
          backgroundColor={'transparent'}
          >
        <View 
          height={height + 10}
          width={width + 10}
          position='absolute'
          backgroundColor='gray-200'
          UNSAFE_style={{opacity: 0.6}}
          />
        <RestartGame reset={resetBoard} isHidden={!gameOver}/> 
      </View>

      <View zIndex={1} position='absolute'>
        <canvas
          ref={canvasRef}
          style={{
            border: "3px solid black",
          }}
          height={height}
          width={width}
        />
      </View>
    </>

  );
};

export default CanvasBoard;