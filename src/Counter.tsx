import React, { useCallback, useState } from "react";

export const Counter: React.VFC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleClick = useCallback(() => {
    setTimeout(() => {
      setCount1((count) => count + 1);
      setCount2((count) => count + 1);
      setCount3((count) => count + 1);
    }, 500);
  }, []);

  console.log("rendering");

  return (
    <div>
      <p>{count1}</p>
      <p>{count2}</p>
      <p>{count3}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
