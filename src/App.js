import "./App.css";
import Home from "./modules/Home.jsx";
import { Provider } from "./context/State";

function App() {
  return (
    <div className="App">
      <Provider>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
