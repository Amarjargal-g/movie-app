"use client";

import { useState, useEffect } from "react";
import { Button } from "./button";
export const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <Button onClick={incrementCount}>+</Button>
    </div>
  );
};
