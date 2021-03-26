import React from 'react';
import CppIllustration from './cppstl.svg'

function CppStl(){
    return (
    <>
    <div className="playground2">
    <div style={{paddingLeft:"10px",fontSize:"130%", fontFamily:"Flamenco"}}>
        Under Progress....
        <ol>
            <li>What is STL?</li>
            <li>array vs vector</li>
            <li>sorting</li>
            <li>set</li>
            <li>queue</li>
            <li>map</li>
            <li>lower_bound and upper_bound</li>
            <li>*basics of templating</li>
            <li>*struct</li>
            <li>*classes and its uses</li>
        </ol>
    </div>
    <div>
        <img src={CppIllustration} width="100%" alt="CppIll" />
    </div>
    </div>
    </>
    )
}

export default CppStl;