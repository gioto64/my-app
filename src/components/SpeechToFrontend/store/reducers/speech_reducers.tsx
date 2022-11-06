import { BUTTON } from "../../common/utils";
import { ADD_COMPONENT, ADD_NUMBER, ADD_TEXT, moveLeft, MOVE_LEFT, MOVE_RIGHT, REMOVE_COMPONENT, SET_LINK, SHOW_CODE } from "../actions/speech_actions";

export interface Component {
  name: string,
  type: string,
  text?: string,
  color?: string,
}

export interface DataGlobalState {
  number: number,
  selection: number,
  text: string,
  code: string,
  link: string,
  content: {
    body: Array <Component>,
  },
}

const dataGlobalState: DataGlobalState = {
  number: 0,
  selection: 0,
  text: "",
  code: "",
  link: "",
  content: {
    body: [
      {
        name: "button one",
        type: BUTTON,
        text: "press me",
      }
    ]
  }
};

const dataReducer = (state = dataGlobalState, action) => {
  switch (action.type) {    
    case MOVE_LEFT:
      let x = state.selection - 1;
      if (x < 0) 
        x = state.number - 1;
      return {
        ...state,
        selection: x,
      }
    case MOVE_RIGHT:
      let y = state.selection + 1;
      if (y >= state.number) 
        y = 0;
      return {
        ...state,
        selection: y,
      }
    case ADD_NUMBER:
      return {
        ...state,
        number: action.payload,
        selection: 0,
      }
    case SET_LINK:
      return {
        ...state,
        link: action.payload,
      }
    case SHOW_CODE:
      return {
        ...state,
        code: action.payload,
      }
    case ADD_TEXT:
      return {
        ...state,
        text: action.payload,
      }
    case ADD_COMPONENT:
      return {
        ...state,
        content: {
          ...state.content,
          body: [
            ...state.content.body,
            action.payload,
          ]
        }
      }
    case REMOVE_COMPONENT:
      return {
        ...state,
        content: {
          ...state.content,
          body: 
            state.content.body.filter((elem) => elem.name !== action.payload),
          
        }  
      }
    default:
      return state;
  }
}

export default dataReducer;