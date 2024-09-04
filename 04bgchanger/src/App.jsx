import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState(() => localStorage.getItem("bgColor") || "olive");

   // Use useEffect to update localStorage whenever the color changes
   useEffect(() => {
    localStorage.setItem("bgColor", color);
  }, [color]);

  return (
    <>
      <h1 className="bg-black text-white p-4 rounded-lg">BgChanger</h1>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap bg-white justify-center gap-3 px-2 py-2 rounded-3xl shadow-lg">
            <button
            onClick={() => setColor("red")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              RED
            </button>

            <button
            onClick={() => setColor("green")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "GREEN" }}
            >
            GREEN
            </button>

            <button
            onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "BLUE" }}
            >
            BLUE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
