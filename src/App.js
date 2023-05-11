import logo from "./logo.svg";
import "./App.css";
import { React, useState } from "react";

function App() {
  //   const [listInputValue, setListInputValue] = useState("");
  //   const listInputValueHandler = (event) => {
  //     setListInputValue(event.target.value);
  //   };

  const [inputValues, setInputValues] = useState([
    { value: "", id: Date.now() },
    { value: "", id: Date.now() +1 },
    { value: "", id: Date.now() +2 },
  ]);

  const handleInputChange = (e, id) => {
    const newInputValues = inputValues.map((input) => {
      if (input.id === id) {
        return { ...input, value: e.target.value };
      }
      return input;
    });
    setInputValues(newInputValues);
  };

  const handleAddInput = () => {
    setInputValues([...inputValues, { value: "", id: Date.now() }]);
  };

  return (
    <div className="h-screen bg-slate-700 p-10">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="text-white text-center text-xs font-mono">by solah, for solah</p>
      <a
        href="https://reactjsexample.com/tag/todo/"
        className="text-cyan-500 flex justify-center mb-10"
      >
        sample todo link
      </a>
      <p className="bg-slate-100/90 rounded px-5 py-3 mb-4 font-mono font-bold text-l text-center">
        To-do List App
      </p>

      <div className="bg-slate-100/90 w-full rounded px-5 py-3">
        <p className="bg-slate-100/90 rounded px-5 py-3 mb-4 font-mono font-bold  text-l">
          List up & Just do it!
        </p>

        <div>
          {inputValues.map((input) => (
            <input
              key={input.id}
              className={`${
                input.value === "" ? "bg-slate-100/50" : "bg-transparent"
              } px-2 py-3 mb-2`}
              value={input.value}
              onChange={(e) => handleInputChange(e, input.id)}
              placeholder="to do?"
              type="text"
            />
          ))}
        </div>
        <button
            onClick={handleAddInput}
            className="px-3 py-2 mt-10 mb-3 bg-slate-100/90 hover:bg-slate-300 rounded"
          >
            Add to do
          </button>
      </div>
    </div>
  );
}

export default App;
