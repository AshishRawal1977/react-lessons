import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div
      className={`w-screen h-screen transition-all`}
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl rounded-xl bg-white px-4 py-3 ">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{ background: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{ background: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{ background: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{ background: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{ background: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
