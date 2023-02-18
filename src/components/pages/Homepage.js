import {react, useEffect, useState} from 'react';
import "../../styles/homepage.css";


export default function Homepage({handlePageChange}){
const [currentTime, setCurrentTime] = useState();

var startDateTime = new Date(2023,0,24,3,19,27,0);
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer;

const updateClock = () => {
  newDate = new Date();
  newStamp = newDate.getTime();
  var diff = Math.round((newStamp - startStamp) / 1000);

  var d = Math.floor(diff / (24 * 60 * 60));
  diff = diff - (d * 24 * 60 * 60);
  var h = Math.floor(diff / (60 * 60));
  diff = diff - (h * 60 * 60);
  var m = Math.floor(diff / (60));
  diff = diff - (m * 60);
  var s = diff;

  setCurrentTime(d+":"+h+":"+m+":"+s);
}
timer = setInterval(updateClock, 1000);
useEffect(()=>{
    updateClock();
},[])
    return(
        <div id="homepage">
           <div id="header-background">
            <div id="homepage-header">
                <h1 id="homepage-header1">code culture</h1>
                <h1 id="homepage-header2">a love letter to the web</h1>
            </div>
           </div>
           <h1>{currentTime}</h1>
        </div>
    )
}