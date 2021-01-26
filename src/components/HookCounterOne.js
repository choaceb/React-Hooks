import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]); // 두번째 인자에 count를 배열 안에 넣어주었다. 이렇게 하면 useEffect는 count state를 지켜보다가 count가 갱신되면 첫번째 인자로 넣어주었던 함수를 실행하게 된다. useEffect 함수를 마운트되고 한 번만 실행하게 하려면 두번째 인자로 빈 배열을 넣는다.

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;
