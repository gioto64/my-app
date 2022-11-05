import {
    createStore,
  } from "redux";
import dataReducer from "./reducers/speech_reducers";
  
const speechStore = createStore(dataReducer);

export default speechStore;