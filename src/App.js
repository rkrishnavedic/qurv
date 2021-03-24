import axios from 'axios';
import { useState } from 'react';
import './App.css';

function AboutUs(){
  return (
    <>
    <div style={{ fontFamily :"Josefin Sans",textAlign: "center",paddingTop: "10%"}}>
      We are some students who aim for helping students for coding interview preparations!
      <p>
        Sole purpose is to help and maintain this website.
      </p>
      <p>
        Let's Crack Coding Interview Problems Together!
      </p>
    </div>

    <div className="footer">
      Website Owner: Rahul Krishna
    </div>
    </>
  )
}

function HomePage(){

  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);
  const [statusData, setStatusData] = useState("NAN");

  function codeforcesUsrNameHandler(event){
    setUserName(event.target.value)
  }

  function userNameClickHandler(){
    if(userName === "" ) return
    axios.get(`https://codeforces.com/api/user.info?handles=${userName}`)
            .then( (res) =>{
              console.log(res.data)
              setData(res.data.result[0])
              setStatusData(res.data.status)
            })
            .catch((err)=>{
              console.log(err)
            })
  }

  function UserData(){
    if( statusData !== "OK" ) return (<div></div>)
    
    return (
      <div style={{paddingTop:"10px",paddingLeft:"10px"}}>
        Name: {data.firstName} {data.lastName} 
        <br/>
        Rating: {data.rating} (maxRating : {data.maxRating})
        <br/>
        Rank: {data.rank} (maxRank : {data.maxRank})
        <br/>
        Country: {data.country},  Contribution : {data.contribution}
        <br/>
        Avatar: <img alt="avatarImage" src={data.avatar}></img>
        <br/>
        Organisation: {data.organization}
      </div>
    )
  }

  return (
    <>
    <div style={{textAlign:"center"}} className="playground">
          Namaste!
          <p>
            We at Qurv aim to provide you a better interview preparation with coding Problems
            <br/>Let us start practice together!
          </p>
        </div>

    <div style={{fontSize: "150%",fontFamily:"Indie Flower"}}>
      <ul>
        <li>C++ STL: It is very handy when you are giving your online coding tests.</li>
        <li>You need atleast full knowledge of Basic Algorithms that are asked in Interviews.</li>
        <li>Advance Algorithms are just for you to expand your knowledge. They are not compulsorily needed to crack Interviews.</li>
        <li>Practice Problems on <a style={{color:"orange"}} href="https://leetcode.com">LeetCode</a>, <a style={{color:"blue"}} href="https://www.hackerearth.com">HackerEarth</a>, <a style={{color:"green"}} href="https://www.hackerrank.com">HackerRank</a> </li>
      </ul>
    </div>

    <div style={{paddingLeft:"10px", fontFamily:"Pangolin"}}>
      Codeforces API Fetch

      <br/>
      Enter the UserName <input onChange={codeforcesUsrNameHandler}></input>
      <button onClick={userNameClickHandler} style={{background:"gray"}}> Fetch</button>
      <UserData/>
    </div>


<div className="footer">
Website Owner: Rahul Krishna
</div>
</>
  )
}

function PracticePage(){
  return (
    <>
    <div style={{ fontFamily: "Josefin Sans", textAlign: "center",paddingTop: "10%"}}>
      Page Under Construction ....
    </div>
    <div className="footer">
Website Owner: Rahul Krishna
</div>
    </>
  )
}

function Page({state}){
  if(state === 1){
    return <AboutUs />
  }
  if(state === 2){
    return <PracticePage />
  }
  return(
    <HomePage />
  )
}

function App() {

  const [about, setAbout] = useState(0)

  function onHomeClick(){
    setAbout(0)
  }

  function cppOnClick(){
    window.open("https://www.geeksforgeeks.org/cpp-stl-tutorial/")
  }

  function basicAlgoClick(){
    window.open("https://www.youtube.com/watch?v=KEEKn7Me-ms&list=PLI1t_8YX-ApvMthLj56t1Rf-Buio5Y8KL")
  }

  function advanceAlgoClick(){
    window.open("https://www.cp-algorithms.com")
  }

  function practiceClick(){
    //under construction
    setAbout(2)
  }
  
  function aboutUsClick(){
    setAbout(1)
  }

  return (
   <>
      <div style={{align:'center'}} className="App-header">
        Qurv
      </div>
      <div className="flex-container">
          <div onClick={onHomeClick} id="home">Home</div>
          <div onClick={cppOnClick} id="cstl">C++ STL</div>
          <div onClick={basicAlgoClick} id="balgo">Basic Algorithms</div>
          <div onClick={advanceAlgoClick} id="aalog">Advance Algorithms</div>
          <div onClick={practiceClick} id="pp">Practice Problems</div>
          <div onClick={aboutUsClick} id="au">About us</div>
      </div>

      <Page state={about} />

   </>
  );
}

export default App;
