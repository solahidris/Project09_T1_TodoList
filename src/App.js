import logo from "./logo.svg";
import "./App.css";
import { React, useState } from "react";

function App() {
  //   const [listInputValue, setListInputValue] = useState("");
  //   const listInputValueHandler = (event) => {
  //     setListInputValue(event.target.value);
  //   };

  const [inputValues, setInputValues] = useState([
    { id: 1, value: "", isChecked: false },
    { id: 2, value: "", isChecked: false },
    { id: 3, value: "", isChecked: false },
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

  const handleCheckboxChange = (e, id) => {
    setInputValues(
      inputValues.map((input) =>
        input.id === id ? { ...input, isChecked: e.target.checked } : input
      )
    );
  };

  const handleAddInput = () => {
    setInputValues([...inputValues, { value: "", id: Date.now() }]);
  };

  const clearInputValues = () => {
    setInputValues([
      { value: "", id: Date.now() },
      { value: "", id: Date.now() + 1 },
      { value: "", id: Date.now() + 2 },
    ]);
  };

  return (
    <div className="h-screen bg-slate-700 p-10">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="text-white text-center text-xs font-mono">
        by solah, for solah
      </p>

      {/* SAMPLE TO DO LINK */}
      {/* <a
        href="https://reactjsexample.com/tag/todo/"
        className="text-cyan-500 flex justify-center mb-10"
      >
        sample todo link
      </a> */}

      <p className="bg-slate-100 italic rounded px-5 py-3 mb-4 font-mono font-bold text-l text-center">
        "One 💩 at a Time" App
      </p>

      {/* Main Container */}
      <div className="bg-slate-100/90 w-full rounded px-5 py-3">
        {/* Sub-Title */}
        <p className="bg-slate-100/90 rounded px-5 py-3 mb-4 font-mono font-bold  text-l">
          List up & clear em up!
        </p>

        <div>
          {/* List Items Generator */}
          <ol className="list-decimal ml-1">
            {inputValues.map((input) => (
              <li
                key={input.id}>
                <input
                  className={`${
                    input.value === "" ? "bg-slate-100/50" : "bg-slate-100/10"
                  } px-2 py-3 mb-2 hover:bg-slate-100/80 rounded font-mono text-xs`}
                  value={input.value}
                  onChange={(e) => handleInputChange(e, input.id)}
                  placeholder="to do?"
                  type="text"
                  style={{
                    textDecoration: input.isChecked ? "line-through" : "none",
                  }}
                />
                <input
                  type="checkbox"
                  checked={input.isChecked}
                  onChange={(e) => handleCheckboxChange(e, input.id)}
                  className="ml-3 h-[15px] w-[15px] checked:accent-green-600 rounded"
                />
              </li>
            ))}
          </ol>
        </div>

        {/* Add list button */}
        <button
          onClick={handleAddInput}
          className="px-5 py-2 mt-10 mb-3 bg-slate-100/90 hover:bg-slate-300 rounded font-mono text-xs font-bold"
        >
          Add to do
        </button>

        {/* Add Clear All button */}
        <button
          onClick={clearInputValues}
          className="px-5 py-2 ml-3 mt-10 mb-3 bg-red-500/90 hover:bg-slate-300 rounded font-mono text-xs font-bold"
        >
          Clear All
        </button>
      </div>

      <div className="bg-green-500">
        <p className="my-5 p-3 bg-red-500">test</p>
        <input button type="checkbox" />
        <p>-------</p>
        <label>
          <input
            type="checkbox"
            className="accent-green-200 bg-blue-500"
          ></input>{" "}
          labels
          <input type="checkbox" class="accent-pink-500"></input>
        </label>
      </div>
    </div>
  );
}

export default App;

//login - auth0
//database- supabase
//vercel - deploy
