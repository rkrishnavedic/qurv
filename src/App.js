import React, { useState } from 'react';
import './App.css'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomePage from './data/home';
import AboutUs from './data/aboutus';
import CppStl from './data/cppstl';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function NavigationBar({mobileDevice}){

  const [value, setValue] = useState(1)
  const [anchorEl, setAnchorEl] = useState(null)

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
  

  function basicAlgoClick(){
    window.open("https://www.youtube.com/watch?v=KEEKn7Me-ms&list=PLI1t_8YX-ApvMthLj56t1Rf-Buio5Y8KL")
  }

  function advanceAlgoClick(){
    window.open("https://www.cp-algorithms.com")
  }

  function handleTab(event, newValue){
    //if(newValue === 1) cppOnClick()
    if(!mobileDevice){
    if(newValue === 3) basicAlgoClick()
    if(newValue === 4) advanceAlgoClick()
      setValue(newValue);
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setValue(parseInt(event.target.id))
    //console.log(event.target)
    setAnchorEl(null);
  };

  if(mobileDevice){
    return (
      <div style={{paddingTop:"50px", paddingLeft:"50px"}}>
      <AppBar className="glassyMenu" style={{opacity: 0.9, background:"whitesmoke", backdropFilter: "blur(4px)"}}>
      
      <Tabs onChange={handleTab} indicatorColor="secondary" textColor="secondary">
          <Tab label="Qurv" style={{background:"#444444",color:"white", fontSize:"120%",fontFamily:"sans-serif", textTransform:"none"}} disabled/>
         
         <Tab style={{left:"60%"}} onClick={handleClick} icon={<MenuIcon/> }/>
      
          </Tabs>
      </AppBar>

        <Menu
        anchorEl={anchorEl}
        elevation={0}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        textColor="secondary"
        indicatorColor="secondary"
          >
        <MenuItem id="1" onClick={handleClose}>Home</MenuItem>
        <MenuItem id="2" onClick={handleClose}>C++ STL</MenuItem>
        <MenuItem id="3" onClick={handleClose}>Basic Algorithm</MenuItem>
        <MenuItem id="4" onClick={handleClose}>Advance Algorithm</MenuItem>
        <MenuItem id="5" onClick={handleClose}>Practice Problem</MenuItem>
        <MenuItem id="6" onClick={handleClose}>About Us</MenuItem>
        </Menu>
        <div style={{paddingTop:"10px", paddingLeft:"10px"}}>
          <Page state={value}/>
        </div>
        </div>    
    )
  }

  return (
    <div style={{paddingTop:"50px", paddingLeft:"50px"}}>
    <AppBar className="glassyMenu" style={{opacity: 0.9, background:"whitesmoke", backdropFilter: "blur(4px)"}}>
      
      <Tabs className="AppBar" value={value} onChange={handleTab} indicatorColor="secondary" textColor="secondary">
          <Tab label="Qurv" style={{background:"#444444",color:"white", fontSize:"120%",fontFamily:"sans-serif", textTransform:"none"}} disabled/>
          
          <Tab id="home" label="Home"/>
          <Tab id="cstl" label="C++ STL"/>
          <Tab id="balgo" label="Basic Algo"/>
          <Tab id="aalog" label="Advance Algo"/>
          <Tab id="pp" label="Practice Problems"/>
          <Tab id="au" label="About us"/>
          
      </Tabs>
      </AppBar>
      <div style={{paddingTop:"10px", paddingLeft:"10px"}}>
      <Page state={value}/>
    </div>

    </div>
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

function App() {
  const mobileDevice = useMediaQuery('(max-width:1100px)');

  return (
   <>
   <div>
      <NavigationBar mobileDevice={mobileDevice} />
      </div>
   </>
  );
}

export default App;
