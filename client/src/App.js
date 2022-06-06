import './App.css';

import {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState('')

  // state to update website style on each click

  const [backColor, setBackColor] = useState('')
  const [font, setFont] = useState('')
  const [fontColor, setFontColor] = useState('')

  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [address, setAddress] = useState('')
  const [github, setGithub] = useState('')
  const [number, setNumber] = useState('')

  useEffect(()=>{
    fetch('/personals/1' + JSON.stringify())
    .then(r=>r.json())
    .then(setData)
    },[])

    // console.log(data)

    function showName () {
      setFirst(data.first)
      setLast(data.last)
    }
    
    const showPlace = () => setAddress(data.address)

    const contactEmail = () => {
      setEmail(data.email)
    }

    function contactNumber() {
      setNumber(data.number)
    }

    function getLinked(){
      setLinkedin(data.linkedin)
    }

    const getGit = () => {
      setGithub(data.github)
      setTimeout(() => {
        window.alert("THANKS FOR HANGING OUT WITH ME");
      }, "2000");
    }

    // var context = new AudioContext();
    // var oscillator = context.createOscillator();
    // oscillator.type = "sine";
    // oscillator.frequency.value = 800;
    // oscillator.connect(context.destination);
    // oscillator.start(); 
    // // Beep for 500 milliseconds
    // setTimeout(function () {
    //     oscillator.stop();
    // }, 100);

    // after last button click set a quick timeout to update more style effects

    console.log(linkedin)

  return (
    <div className="App">

      {/* in here render images on clicks for personal picture / city / contact information and links */}

      <h1>Here we go</h1>
      <div>Hello... my name is: <h1>{first}</h1> <h1>{last}</h1> </div>
      { first === '' ? <button onClick={showName}>Name</button> : null }
      <div>I am a Software Engineer and Web Developer living in: <h1>{address}</h1></div>
      { address === '' ? <button onClick={showPlace}>City</button> : null }
      <div>Send me an email here: <h1><a href={"mailto:" + email}>{email}</a></h1></div>
      { email === '' ? <button onClick={contactEmail}>Email</button> : null }
      <div>or call or text here: <h1>{number}</h1></div>
      { number === '' ? <button onClick={contactNumber}>Number</button> : null }
      <div>Also, Please visit me here: <h1><a href={"https://www." + linkedin} target="_blank">{linkedin}</a></h1></div>
      { linkedin === '' ? <button onClick={getLinked}>LinkedIn</button> : null }
      <div>and here: <h1><a href={"https://www." + github} target="_blank">{github}</a></h1></div>
      { github === '' ? <button onClick={getGit}>Github</button> : null }
      
    </div>
  );
}

export default App;
