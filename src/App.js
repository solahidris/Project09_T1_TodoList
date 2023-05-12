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
    { value: "", id: Date.now() + 1 },
    { value: "", id: Date.now() + 2 },
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
      <p className="text-white text-center text-xs font-mono">
        by solah, for solah
      </p>
      <a
        href="https://reactjsexample.com/tag/todo/"
        className="text-cyan-500 flex justify-center mb-10"
      >
        sample todo link
      </a>

      <p className="bg-slate-100 italic rounded px-5 py-3 mb-4 font-mono font-bold text-l text-center">
        "One Day at a Time" App
      </p>

      {/* Main Container */}
      <div className="bg-slate-100/90 w-full rounded px-5 py-3">
        {/* testing */}
        {/* <p className="px-2 py-3 mb-2 bg-white rounded font-mono text-xs">apa ni</p>
      <p className="px-2 py-3 mb-2 bg-white rounded font-mono text-xs">apa ni</p>
      <div className="flex flex-col">
        <input className="bg-red-500 mb-2" type="text"></input>
        <input className="bg-green-300 h-auto mb-2" type="text"></input>
      </div>
      <div class="flex">
        <input class=" mb-2" type="text"></input>
        <input class=" w-auto h-full mb-2" type="text"></input>
      </div> */}
        {/* testing */}

        <p className="bg-slate-100/90 rounded px-5 py-3 mb-4 font-mono font-bold  text-l">
          List up & Just do it!
        </p>

        <ol className="list-decimal mx-1">
          {inputValues.map((input) => (
            <li key={input.id}>
              <input
                className={`${
                  input.value === "" ? "bg-slate-100/50" : "bg-slate-100/10"
                } px-2 py-3 mb-2 hover:bg-slate-100/80 rounded font-mono text-xs w-auto`}
                value={input.value}
                onChange={(e) => handleInputChange(e, input.id)}
                placeholder="to do?"
                type="text"
              />
            </li>
          ))}
        </ol>
        <button
          onClick={handleAddInput}
          className="px-5 py-2 mt-10 mb-3 bg-slate-100/90 hover:bg-slate-300 rounded font-mono text-xs font-bold"
        >
          Add to do
        </button>
      </div>
    </div>
  );
}

export default App;

//login - auth0
//database- supabase
//vercel - deploy
