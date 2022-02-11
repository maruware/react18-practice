import React, { startTransition, useCallback, useState } from "react";

function sleep(ms: number) {
  const startTime = performance.now();
  while (performance.now() - startTime < ms);
}

export const Counter: React.VFC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = useCallback(() => {
    setCount1((count) => count + 1);
    startTransition(() =>
      setCount2((count) => {
        sleep(2000);
        return count + 1;
      })
    );
  }, []);

  console.log("rendering");

  return (
    <div>
      <p>{count1}</p>
      <p>{count2}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
