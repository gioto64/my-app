import { Component } from "../reducers/speech_reducers";

export const ADD_COMPONENT = "ADD_COMPONENT";
export const REMOVE_COMPONENT = "REMOVE_COMPONENT";
export const ADD_TEXT = "ADD_TEXT";
export const SHOW_CODE = "SHOW_CODE";
export const SET_LINK = "SET_LINK";

export const addComponent = (component: Component) => ({
  type: ADD_COMPONENT,
  payload: component,
});

export const removeComponent = (name: string) => ({
  type: REMOVE_COMPONENT,
  payload: name,
});

export const addText = (text: string) => ({
  type: ADD_TEXT,
  payload: text,
});

export const showCode = (code: string) => ({
  type: SHOW_CODE,
  payload: code,
});

export const setLink = (link: string) => ({
  type: SET_LINK,
  payload: link,
})