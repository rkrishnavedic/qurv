import axios from 'axios';
import React, { useState } from 'react';
import './App.css'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GetAppIcon from '@material-ui/icons/GetApp';

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
              //console.log(res.data)
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
    <HomeIcon/>
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
      
      Enter the UserName <TextField size="small" variant="outlined" onChange={codeforcesUsrNameHandler} label="handle"/>
      
    
      <Button
        variant="contained"
        startIcon={<GetAppIcon color="primary"/>}
        onClick={userNameClickHandler}
        textColor="primary"
      >
        Fetch
      </Button>
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
  if(state === 5){
    return <AboutUs />
  }
  if(state === 4){
    return <PracticePage />
  }
  return(
    <HomePage />
  )
}

function App() {

  const [value, setValue] = useState(0)

  function cppOnClick(){
    window.open("https://www.geeksforgeeks.org/cpp-stl-tutorial/")
  }

  function basicAlgoClick(){
    window.open("https://www.youtube.com/watch?v=KEEKn7Me-ms&list=PLI1t_8YX-ApvMthLj56t1Rf-Buio5Y8KL")
  }

  function advanceAlgoClick(){
    window.open("https://www.cp-algorithms.com")
  }

  function handleTab(event, newValue){
    if(newValue === 1) cppOnClick()
    if(newValue === 2) basicAlgoClick()
    if(newValue === 3) advanceAlgoClick()
      setValue(newValue);
  }

  return (
   <>
      <div style={{align:'center'}} className="App-header">
        Qurv
      </div>
      <Paper square>
      <Tabs value={value} onChange={handleTab} indicatorColor="secondary" textColor="secondary">
      <Tab id="home" label="Home"/>
          <Tab id="cstl" label="C++ STL"/>
          <Tab id="balgo" label="Basic Algorithms"/>
          <Tab id="aalog" label="Advance Algorithms"/>
          <Tab id="pp" label="Practice Problems"/>
          <Tab id="au" label="About us"/>
      </Tabs>
      </Paper>
      
      <Page state={value} />

   </>
  );
}

export default App;
