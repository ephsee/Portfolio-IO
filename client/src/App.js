// import './App.css';
import {useState, useEffect} from 'react'
import Comments from './components/Comments'
import NewComment from './components/NewComment';

function App() {

let aColor = Math.floor(Math.random()*16777215).toString(16);

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

  const [pic, setPic] = useState('')
  const [bk, setBk] = useState('')

  useEffect(()=>{
    fetch('/personals/1' + JSON.stringify())
    .then(r=>r.json())
    .then(setData)
    },[])

    // console.log(data)

    function showName () {
      setFirst(data.first);
      setLast(data.last);
      setPic('https://res.cloudinary.com/ephsee/image/upload/v1655412155/FC/IMG_6067_1_yvwdpx.jpg')
      document.getElementById('pageStyle').setAttribute("class", "first");
    }
    
    const showPlace = () => {
      setAddress(data.address);
      setBk('https://res.cloudinary.com/ephsee/image/upload/v1655412489/FC/redd-wOj5odhDOZ0-unsplash_mvbma9.jpg')
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
      setPic('https://res.cloudinary.com/ephsee/image/upload/v1655412155/FC/640_640_u7wbqg.jpg')
      setBk('https://res.cloudinary.com/ephsee/image/upload/v1655413937/FC/hannes-richter-GzV_dXR3MgM-unsplash_sw7dvu.jpg')
    }

    const getGit = () => {

      fetch('/comments')
      .then(r=>r.json())
      .then(data => setList(data.reverse()))

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

      {/* in here render images on click for personal picture / city / contact information and links */}

      <h1>Here we go</h1>
      <div>Hello... my name is: <h1>{first}</h1> <h1>{last}</h1> <img height="200" src={pic}/> </div>
      { first === '' ? <button onClick={showName}>Name</button> : null }
      <div>I am a Software Engineer and Web Developer living in: <h1>{address}</h1> <img height='200' src={bk}/></div>
      { address === '' ? <button onClick={showPlace}>City</button> : null }
      <div>Send me an email here: <h1><a href={"mailto:" + email}>{email}</a></h1></div>
      { email === '' ? <button onClick={contactEmail}>Email</button> : null }
      <div>or call or text here: <h1>{number}</h1></div>
      { number === '' ? <button onClick={contactNumber}>Number</button> : null }
      <div>Also, Please visit me here: <h1><a href={"https://www." + linkedin} target="_blank">{linkedin}</a></h1></div>
      { linkedin === '' ? <button onClick={getLinked}>LinkedIn</button> : null }
      <div>and here: <h1><a href={"https://www." + github} target="_blank">{github}</a></h1></div>
      { github === '' ? <button onClick={getGit}>Github</button> : null }
      { github !== '' ? <div> <NewComment user={data} list={list} setList={setList} /> <Comments list={list}/> </div> : null }

      
    </div>
  );
}

export default App;
