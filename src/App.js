import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
      <div className="h-screen bg-slate-700 p-10">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-white text-center">this is a to do list app</p>
          <p className="text-white text-center">this is a to do list app</p>
          <p className="text-white text-center">this is a to do list app</p>
          <a href="https://reactjsexample.com/tag/todo/" className="text-cyan-500 flex justify-center">sample todo link</a>
          <p className="text-white text-center">switched to "build-feature" branch</p>
          <p className="text-white text-center">add code just to push</p>
        <div className="bg-slate-100/90 w-full rounded px-5 py-3">
          <p className="bg-slate-100/90 rounded px-5 py-3 mb-4 font-mono font-bold uppercase text-l">To Do List App Box Title</p>
          <p className="px-5 py-3 font-mono text-xs">App List items</p>
          <p className="px-5 py-3 font-mono text-xs">App List items</p>
          <p className="px-5 py-3 font-mono text-xs">App List items</p>
          <p className="px-5 py-3 font-mono text-xs">App List items</p>
        </div>
      </div>
  );
}

export default App;
