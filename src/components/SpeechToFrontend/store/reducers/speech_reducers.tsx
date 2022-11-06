import { BUTTON } from "../../common/utils";
import { ADD_COMPONENT, ADD_TEXT, REMOVE_COMPONENT } from "../actions/speech_actions";

export interface Component {
  name: string,
  type: string,
  text?: string,
  color?: string,
}

export interface DataGlobalState {
  text: string,
  content: {
    body: Array <Component>,
  },
}

const dataGlobalState: DataGlobalState = {
  text: "",
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