import logo from "./logo.svg";
import "./App.css";
import { React, useState } from "react";

function App() {
  const [listInputValue, setListInputValue] = useState("");
  const listInputValueHandler = (event) => {
    setListInputValue(event.target.value);
  };

  return (
      <div className="h-screen bg-slate-700 p-10">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-white text-center">this is a to do list app</p>
          <a href="https://reactjsexample.com/tag/todo/" className="text-cyan-500 flex justify-center mb-10">sample todo link</a>
          <p className="bg-slate-100/90 rounded px-5 py-3 mb-4 font-mono font-bold text-l text-center">Today's To-do List</p>
          <ul>
            <li className="list-disc">something</li>
            <li>another li here</li>
          </ul>
        <div className="bg-slate-100/90 w-full rounded px-5 py-3">
          <p className="bg-slate-100/90 rounded px-5 py-3 mb-4 font-mono font-bold uppercase text-l">Title</p>
          <p className="px-5 py-3 font-mono text-xs">List Items</p>
          <input type="text" className="px-5 py-3 font-mono text-xs bg-transparent"></input>
          <ul className="list-decimal font-mono pl-10 text-xs">
            <li><input placeholder="to do?" type="text" className="px-2 py-3 font-mono text-xs bg-transparent rounded mb-3"></input></li>
            <li><input className={`${listInputValue === "" ? "bg-red-500" : "bg-green-500"}`} Value={listInputValue} onChange={listInputValueHandler} placeholder="to do?" type="text"></input></li>

            {/* function MyComponent() {
             const [inputValue, setInputValue] = useState('');
            return (
              <div>
                <input type="text" 
                className={`px-2 py-3 font-mono text-xs 
                ${inputValue !== '' ? 'bg-green-500' : 'bg-slate-100/50'}`} 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} />
              </div>
            );
            } */}

            <li><input placeholder="what do you need to do?" Value="haha" type="text" className="px-2 py-3 font-mono text-xs bg-transparent rounded mb-3"></input></li>
            <li><input type="text" className="px-2 py-3 font-mono text-xs bg-slate-100/50 rounded mb-3"></input></li>
          </ul>
        </div>
      </div>
  );
}

export default App;
