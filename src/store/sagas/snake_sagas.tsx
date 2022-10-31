import {
  CallEffect,
  delay,
  put,
  PutEffect,
  takeLatest
} from "redux-saga/effects";
import {
  DOWN,
  ISnakeCoord,
  LEFT,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP, RIGHT,
  setDisDirection, STOP_GAME, UP
} from "../actions/snake_actions";

export function* moveSaga(params: {
  type: string;
  payload: ISnakeCoord;
}): Generator<
  | PutEffect<{ type: string; payload: ISnakeCoord }>
  | PutEffect<{ type: string; payload: string }>
  | CallEffect<true>
> {
  console.log(params);
  while (params.type !== STOP_GAME) {
    yield put({
      type: params.type.split("_")[1],
      payload: params.payload,
    });
    switch (params.type.split("_")[1]) {
      case RIGHT:
        yield put(setDisDirection(LEFT));
        break;

      case LEFT:
        yield put(setDisDirection(RIGHT));
        break;

      case UP:
        yield put(setDisDirection(DOWN));
        break;

      case DOWN:
        yield put(setDisDirection(UP));
        break;
    }
    yield delay(1000);
  }
}

function* watcherSagas() {
  yield takeLatest(
    [MOVE_RIGHT, MOVE_LEFT, MOVE_UP, MOVE_DOWN, STOP_GAME],
    moveSaga
  );
}

export default watcherSagas;