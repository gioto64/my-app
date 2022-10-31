import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { IGlobalState } from "../../store/reducers";
import { drawObject, generateRandomPosition, IObjectBody } from "./common/utilities";

export interface ICanvasBoard {
  height: number;
  width: number;
}

const CanvasBoard = ({ height, width }: ICanvasBoard) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState <CanvasRenderingContext2D | null> (null);
  const snake1 = useSelector((state: IGlobalState) => state.snake);
	const [pos, setPos] = useState<IObjectBody>(
    generateRandomPosition(width - 20, height - 20)
  );
  
  useEffect(() => {
    //Draw on canvas each time
    setContext(canvasRef.current && canvasRef.current.getContext("2d")); //store in state variable
		drawObject(context, snake1, "#91C483"); //Draws snake at the required position
		drawObject(context, [pos], "#676FA3"); //Draws fruit randomly    // linter disabled for setContext
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        border: "3px solid black",
      }}
      height={height}
      width={width}
    />
  );
};

export default CanvasBoard;