import "./App.css";
import {Route , Routes} from "react-router-dom";
import Addcontact from "./component/Addcontact";
import Listcontact from "./component/Listcontact";
import Editcomp from "./component/Editcomp";
import {useState} from "react"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/Add" element={ <Addcontact /> } />
        <Route path="/" element={ <Listcontact /> } />
        <Route path="/edit/:id"  element={<Editcomp /> } />
      </Routes>
    </>
  );
}

export default App;
