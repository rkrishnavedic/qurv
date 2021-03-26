import React from 'react';
import AboutIllustrator from './about.svg';

function AboutUs(){
    return (
      <>
      <div style={{flexDirection:"column"}}>
      <div style={{ fontFamily :"Flamenco",fontSize:"150%",textAlign: "center",paddingTop: "10%"}}>
        We are Prefinal year students who aim for helping students for coding interview preparations!
        <p>
          Let's Crack Coding Interview Problems Together!
        </p>
      </div>

      <div>
        <img width="85%" src={AboutIllustrator} alt="aboutImage" />
      </div>
      </div>

        {/*<div className="footer">
        Website Owner: Rahul Krishna
      </div>*/}
      </>
    )
  }

  export default AboutUs;
