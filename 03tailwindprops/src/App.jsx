

import "./App.css";
import Card from "./components/Card";

function App() {


  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">Hello Tailwind</h1>

     <Card username="Muskan" btnText="Visite Profile"/>
     <Card username="Radha" btnText="Visite More" />
    </>
  );
}

export default App;
