import { Component } from "../store/reducers/speech_reducers";
export const BUTTON = 'BUTTON';

interface CreateButtonProps {
    name: string,
    text?: string,
}

export const createButton = (props: CreateButtonProps) => {
    return {
        ...props,
        type: BUTTON,
    };
}