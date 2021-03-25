import React, { useState } from 'react';
import './App.css'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomePage from './data/home';
import AboutUs from './data/aboutus';
import CppStl from './data/cppstl';



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
  if(state === 6){
    return <AboutUs />
  }
  if(state === 5){
    return <PracticePage />
  }
  if(state === 2){
    return <CppStl />
  }
  return(
    <HomePage />
  )
}

function App() {

  const [value, setValue] = useState(1)

  function basicAlgoClick(){
    window.open("https://www.youtube.com/watch?v=KEEKn7Me-ms&list=PLI1t_8YX-ApvMthLj56t1Rf-Buio5Y8KL")
  }

  function advanceAlgoClick(){
    window.open("https://www.cp-algorithms.com")
  }

  function handleTab(event, newValue){
    //if(newValue === 1) cppOnClick()
    if(newValue === 3) basicAlgoClick()
    if(newValue === 4) advanceAlgoClick()
      setValue(newValue);
  }

  return (
   <>
   <div>
      <AppBar style={{opacity: 0.8, background:"#dfdfdf", backdropFilter: "blur(4px)"}}>
      <Tabs style={{}} value={value} onChange={handleTab} indicatorColor="secondary" textColor="secondary">
          <Tab label="Qurv" style={{background:"#444444",color:"white", fontSize:"120%",fontFamily:"sans-serif", textTransform:"none"}} disabled/>
          
          <Tab id="home" label="Home"/>
          <Tab id="cstl" label="C++ STL"/>
          <Tab id="balgo" label="Basic Algo"/>
          <Tab id="aalog" label="Advance Algo"/>
          <Tab id="pp" label="Practice Problems"/>
          <Tab id="au" label="About us"/>
          
      </Tabs>
      </AppBar>
      </div>
      
      <div style={{paddingBottom:"50px", paddingTop:"50px"}}>
      <Page state={value} />

      </div>
   </>
  );
}

export default App;
