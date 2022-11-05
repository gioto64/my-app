import { Component } from "../reducers/speech_reducers";

export const ADD_COMPONENT = "ADD_COMPONENT";
export const REMOVE_COMPONENT = "REMOVE_COMPONENT";

export const addComponent = (component: Component) => ({
  type: ADD_COMPONENT,
  payload: component,
});

export const removeComponent = (name: string) => ({
  type: REMOVE_COMPONENT,
  payload: name,
});