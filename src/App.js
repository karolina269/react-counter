import "./App.css";

import Heading from "./components/Heading";
import Counter from "./Counter";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text="React counter app" />
      </header>
      <Counter counterInitValue={0} />
    </div>
  );
};

export default App;
