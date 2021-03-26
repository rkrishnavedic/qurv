import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GetAppIcon from '@material-ui/icons/GetApp';
import React, {useState} from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HomeIllustration from './ill.svg'

function HomePage(){

 
    const [userName, setUserName] = useState("");
    const [data, setData] = useState([]);
    const [statusData, setStatusData] = useState("NAN");
    const [contestID, setContestID] = useState(0);
    const [contestData, setContestData] = useState([])
    const [statusContestData, setStatusContestData] = useState("N");
  
    function codeforcesUsrNameHandler(event){
      
      setUserName(event.target.value)
    }

    function codeforcesContestHandler(event){
      //console.log(contestID)
      setContestID(event.target.value)
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

    function contestIDClickHandler(){
      if(contestID === 0 ) return
      axios.get(`https://codeforces.com/api/contest.status?contestId=${contestID}&handle=${userName}&from=1&count=10`)
              .then( (res) =>{
                // console.log(res.data.result.length)
                setContestData(res.data.result)
                setStatusContestData(res.data.status)
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


      function ContestDataDisplay(){
        // console.log(contestData[0])
        if( statusContestData !== "OK" ) return (<div></div>)
        
        return (
         <div>
           <TableContainer component={Paper}>
             <Table>
           <TableHead>
           <TableRow>
               <TableCell>Submission ID</TableCell>
               <TableCell>Verdict</TableCell>
               <TableCell>Problem</TableCell>
               <TableCell>Time (ms)</TableCell>
               <TableCell>testSet</TableCell>
               <TableCell>passedTestCount</TableCell>
               <TableCell>Language</TableCell>
               <TableCell>Contest</TableCell>
               <TableCell>author</TableCell>
              </TableRow>
              </TableHead>
            
              <TableBody>
           {contestData.map((value, index) => {
            //  console.log(value.author.members[0].handle)
            //  console.log(index)
             return(
              <TableRow>
                 
                 <TableCell>{value.id}</TableCell>
                 <TableCell>{value.verdict}</TableCell>
                 <TableCell>{value.problem.index}. {value.problem.name}</TableCell>
                 <TableCell>{value.timeConsumedMillis}</TableCell>
                 <TableCell>{value.testset}</TableCell>
                 <TableCell>{value.passedTestCount}</TableCell>
                 <TableCell>{value.programmingLanguage}</TableCell>
                 <TableCell>{value.contestId}</TableCell>
                 <TableCell>{value.author.members[0].handle}</TableCell>
              </TableRow>
             )
           })}
           </TableBody>
           </Table>
            </TableContainer>
            


         </div>
        )
      }
    
      return (
        <div style={{overflow: "scroll"}}>
        <HomeIcon/>
        <div style={{textAlign:"center"}} className="playground">
          <div>
              Namaste!
              <p>
                We at Qurv aim to provide you a better interview preparation with coding Problems
                <br/>Let's practice together!
                
              </p>
              </div>
              <div>
              <img width="100%" src={HomeIllustration} alt="HomeIllustration"/>
              </div>
            </div>
    
        <div style={{fontSize: "150%",fontFamily:"Flamenco"}}>
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
          
          Enter the UserName 
          <br/>
          <TextField size="small" variant="outlined" onChange={codeforcesUsrNameHandler} label="handle"/>
          
        
          <Button
            variant="contained"
            startIcon={<GetAppIcon color="primary"/>}
            onClick={userNameClickHandler}
            textColor="primary"
          >
            Fetch
          </Button>
          <UserData/>
          <br/>
          Enter Contest ID 
          <br/>
          <TextField size="small" variant="outlined" onChange={codeforcesContestHandler} label="ID"/>
          
        
          <Button
            variant="contained"
            startIcon={<GetAppIcon color="secondary"/>}
            onClick={contestIDClickHandler}
            textColor="primary"
          >
            Check Your Submissions
          </Button>
          <ContestDataDisplay />

        </div>

        <div style={{paddingLeft:"10px",paddingTop:"10px", fontFamily:"Pangolin"}}>
          Note: To fetch your contest submissions please enter your handle on Codeforces and contest ID
          <br/>Example: handle = tourist, contest ID = 1500
          </div>
    
    
    <div className="footer">
    Website Owner: Rahul Krishna
    </div>
    </div>
      )
    }
export default HomePage;