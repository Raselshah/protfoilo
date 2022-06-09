import HomePage from "./Pages/HomePage/HomePage";
import NavMenu from "./Pages/NavMenu/NavMenu";
import "./App.css";
function App() {
  return (
    <div className="App bg-accent h-[340vh]">
      <NavMenu />
      <HomePage />
    </div>
  );
}

export default App;
