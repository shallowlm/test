import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Hello React with VSCode!</h1>
      <p>计数器：{count}</p>
      <button onClick={() => setCount(count + 1)}>点击 +1</button>
    </div>
  );
}

export default App;
