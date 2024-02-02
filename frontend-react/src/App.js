import "./App.css";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";

function App() {
  return(
    <div>
      <Header />
      <Homepage />
    </div>
  );
  // return <button class= "bg-slate-600 hover:bg-slate-700 text-3xl text-white font-bold py-2 px-4 rounded ">Login from App</button>;
}
export default App;
