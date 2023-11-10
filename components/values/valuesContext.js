import { createContext, useEffect, useState } from "react";

export const ValueContext = createContext(null);

export default function ValueProvider({ children }) {
  const [size, setSize] = useState({});
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  useEffect(() => (window.onresize = updateSize), []);
  return (
    <ValueContext.Provider
      value={{
        size,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
}
