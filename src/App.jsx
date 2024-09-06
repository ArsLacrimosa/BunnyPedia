import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BunnyTable from "./components/BunnyTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header>Jaja</Header>
      <BunnyTable />
    </div>
  );
}

export default App;
