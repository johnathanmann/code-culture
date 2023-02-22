import {react, useEffect, useState} from 'react';
import "../../styles/homepage.css";
import phone from "../../assets/imgs/phone.png";


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
           <div className='container' id="intro">
                <div className='col-12'>
                    <h1 className='header' id="header"><span className='pink'>&#60;h1&#62;</span>What is <i>code culture</i><span className='pink'>&#60;/h1&#62;</span></h1>
                    </div>
                <div className='col-12'>
                    <p className='text'>An appreciation of the web and all of its technologies and a resource for devs of different experience levels. Broaden your horizons and get introduced to a new technology or one you've just never gotten around too. While you're here dip your foot into the online web dev community by listening to a new podcast, or by finding a new web dev youtuber over on the community tab. This is a gift from me to you in the form of what we all know and love: a website.</p>
                </div>
           </div>
           <div id='marquees'>
                <div className="marquee" id="language">
                    <div className="marquee__inner header" aria-hidden="true">
                        <span>Languages</span>
                        <span>Languages</span>
                        <span>Languages</span>
                        <span>Languages</span>
                    </div>
                </div>
                <div className="marquee" id="framework">
                    <div className="marquee__inner header" aria-hidden="true">
                        <span>Frameworks</span>
                        <span>Frameworks</span>
                        <span>Frameworks</span>
                        <span>Frameworks</span>
                    </div>
                </div>
                <div className="marquee" id="library">
                    <div className="marquee__inner header" aria-hidden="true">
                        <span>Libraries</span>
                        <span>Libraries</span>
                        <span>Libraries</span>
                        <span>Libraries</span>
                    </div>
                </div>
           </div>
           <div className='container' id="info">
            <div className='row'>
                <div className='col-md-6 text-center'>
                    <img className="img-fluid" id="phone" src={phone} alt="Graphic of a simple version of the phone view of Code Culture"/>
                </div>
                <div className='col-md-6 my-auto'>
                <h1><span className='pink'>&#60;h1&#62;</span>Community<span className='pink'>&#60;/h1&#62;</span></h1>
                <p className='text'>Find content and community for web devs</p>
                <h1><span className='pink'>&#60;h1&#62;</span>Resources<span className='pink'>&#60;/h1&#62;</span></h1>
                <p className='text'>Discover different places to learn about website development</p>
                <h1><span className='pink'>&#60;h1&#62;</span>Docs<span className='pink'>&#60;/h1&#62;</span></h1>
                <p className='text'>Get directions to documentation for all our favorite technologies</p>
                </div>
            </div>
           </div>
        </div>
    )
}