import React, { useState, useEffect, useRef, useContext } from "react";
import terminal_styles from "./terminal.module.css";
import { ValueContext } from "./values/valuesContext";

export default function Terminal() {
  var { commandsState, setCommandsState, loading } =
    React.useContext(ValueContext);
  function createCommand(command, index) {
    var text = command.text,
      response = command.response;
    return (
      <div>
        <span className={terminal_styles.prompt}>my-computer $</span>
        <span> {text}</span>
        <div className={terminal_styles.response}>{response}</div>
      </div>
    );
  }
  useEffect(() => {
    setCommandsState(commandsState);
  }, [commandsState]);
  return (
    <div className={terminal_styles.terminal}>
      <div className={terminal_styles.root}>
        <div className={terminal_styles.wm}>Terminal</div>
        <div>{commandsState.map(createCommand)}</div>
      </div>
    </div>
  );
}
