import './App.css';

import {useState, useEffect} from 'react'

function App() {

  const URL = 'http://localhost:3000/personals'

  const [data, setData] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3000/personals')
    .then(r=>r.json())
    .then(data => console.log(data))
  },[])

  // console.log(data)

  return (
    <div className="App">

      <h1>WHEN WILL THIS SHIT END</h1>
      
    </div>
  );
}

export default App;
