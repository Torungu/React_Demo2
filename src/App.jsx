import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="background_img">
        <Header />
        <Content />
      </div>
    </>
  );
}

export default App;
