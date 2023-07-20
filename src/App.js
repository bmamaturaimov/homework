import { useState } from 'react';
import './App.css';
import Buttuns from './Components/Buttuns';
import Modal from './Components/Ul/Modal';
import Forum from './Components/Forum';

function App() {
  const [state,setState] = useState (false);
  const [state2,setState2] = useState (false);

  function showForm () {
    setState ((prew) => !prew);
  }
  function showForm2 () {
    setState2 ((prew2) => !prew2);
  }



  return (
    <div className="App">
      {state && (
        <Modal blockModal={showForm}>
        <h1>SOCCESS</h1>
        </Modal>
      )}

      {state2 && (
         <Forum blockModal={showForm2}>
           <h1>ERROR</h1>
         </Forum>

      )}

      <Buttuns onClick={showForm}>SOCCESS</Buttuns>
      <Buttuns onClick={showForm2}>ERROR</Buttuns>
           
    </div>
  );
}

export default App;
