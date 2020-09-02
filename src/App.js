import React, {useState}from 'react';
import Name from './Components/Name'
import './App.css';

function App() {

const [gender, setGender] = useState(null)
const [name, setName] = useState('')
const [showName, setShowName] = useState(false)



  return (
    <div className="App">
      <h3>test</h3>
      <Name OK={()=>setShowName(true)} setName={setName}/>
      <p>
        Your Name is {showName? name : null}
        </p>
    </div>
  );
}

export default App;
