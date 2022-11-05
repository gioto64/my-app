import React from "react";
import { Button } from "@adobe/react-spectrum";
import { BUTTON } from "./common/utils";

const Components = {
  button: Button,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default block => {
  switch (block.type) {
    case BUTTON:
      return React.createElement(Components.button, {
        variant: "cta",
        gridArea: block.name,
      },
      block.name, 
      );
  }

};