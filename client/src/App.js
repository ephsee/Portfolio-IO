// import './App.css';
import {useState, useEffect} from 'react'
import Comments from './components/Comments'

function App() {

//   const Heading1 = styled.h1`
//     font-family: monospace;
//     text-align: center;
//     color: red;
// `
//   const Container1 = styled.div`
//       background-color: black;
//       border-radius: 15px;
//   `

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

  const [list, setList] = useState([])

  useEffect(()=>{
    fetch('/personals/1' + JSON.stringify())
    .then(r=>r.json())
    .then(setData)
    },[])

    // console.log(data)

    function showName () {
      setFirst(data.first);
      setLast(data.last);
      document.getElementById('pageStyle').setAttribute("class", "first");
    }
    
    const showPlace = () => {
      setAddress(data.address);
      // document.getElementsByTagName('button').setAttribute("class", "second");
      document.getElementsByClassName('second').className = "button"
    }

    const contactEmail = () => {
      setEmail(data.email);
      // document.getElementById('pageStyle').setAttribute("class", "third");
    }

    function contactNumber() {
      setNumber(data.number)
    }

    function getLinked(){
      setLinkedin(data.linkedin)
    }

    const getGit = () => {

      fetch('/comments')
      .then(r=>r.json())
      .then(setList)

      setGithub(data.github)
      setTimeout(() => {
        window.alert(`THANKS FOR HANGING OUT WITH ME - ╰(*°▽°*)╯ - don't forget to leave a comment`);
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

  return (
    <div id="pageStyle" className="start">

      {/* in here render images on clicks for personal picture / city / contact information and links */}

      <h1>Here we go</h1>
      <div>Hello... my name is: <h1>{first}</h1> <h1>{last}</h1> </div>
      { first === '' ? <button className="second" onClick={showName}>Name</button> : null }
      <div>I am a Software Engineer and Web Developer living in: <h1>{address}</h1></div>
      { address === '' ? <button className="second" onClick={showPlace}>City</button> : null }
      <div>Send me an email here: <h1><a href={"mailto:" + email}>{email}</a></h1></div>
      { email === '' ? <button className="second" onClick={contactEmail}>Email</button> : null }
      <div>or call or text here: <h1>{number}</h1></div>
      { number === '' ? <button className="second" onClick={contactNumber}>Number</button> : null }
      <div>Also, Please visit me here: <h1><a href={"https://www." + linkedin} target="_blank">{linkedin}</a></h1></div>
      { linkedin === '' ? <button className="second" onClick={getLinked}>LinkedIn</button> : null }
      <div>and here: <h1><a href={"https://www." + github} target="_blank">{github}</a></h1></div>
      { github === '' ? <button className="second" onClick={getGit}>Github</button> : null }
      { github !== '' ? <Comments list={list}/> : null }

      
    </div>
  );
}

export default App;
