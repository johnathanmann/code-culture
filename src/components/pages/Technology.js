import techTypes from '../../assets/tech.json'
import "../../styles/technology.css";
import greenMic from "../../assets/imgs/green-mic.png"
import orangeMic from "../../assets/imgs/orange-mic.png"
import yellowMic from "../../assets/imgs/yellow-mic.png"
import greenPlay from "../../assets/imgs/green-play.png"
import orangePlay from "../../assets/imgs/orange-play.png"
import yellowPlay from "../../assets/imgs/yellow-play.png"
import greenArticle from "../../assets/imgs/green-article.png"
import orangeArticle from "../../assets/imgs/orange-article.png"
import yellowArticle from "../../assets/imgs/yellow-article.png"
var microphone;
var play;
var article;

export default function Technology(props){

    let techName = (props.tech);
    console.log(techName)
    const wantedTech = techTypes.filter(function(i) {
        return i.name === techName;
      });

    if(wantedTech[0].type === "Language"){
        microphone = orangeMic;
        play = orangePlay;
        article = orangeArticle;
    }

    if(wantedTech[0].type === "JavaScript-Library"){
        microphone = greenMic;
        play = greenPlay;
        article = greenArticle;
    }

    if(wantedTech[0].type === "CSS-Framework"){
        microphone = yellowMic;
        play = yellowPlay;
        article = yellowArticle;
    }

      window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "0px";
        }
        }

    return(
        <div className={wantedTech[0].type}>
            <div className='container' id="technology">
                <div className='row'>
                    <div className='col-lg-6 '>
                    <h1 className='header'>{wantedTech[0].name}</h1>
                        <p className='subheading text '>Initial Release: {wantedTech[0].release}</p>
                        <p><a className='subheading text' target="_blank" href={wantedTech[0].docs}>Documentation</a></p>
                    </div>
                    <div className='col-lg-6'>
                        <p className='description'>{wantedTech[0].description}</p>
                    </div>
                </div>
                <div className='row text-center' id="learn">
                <h1 className='header'>Learn More</h1>
                    <div className='col-md-4 d-flex'>
                        <div className='content-card'>
                            <img alt="Microphone icon" src={microphone}/>
                            <h1>Podcast</h1>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex'>
                        <div className='content-card'>
                            <img alt="Play button icon" src={play}/>
                            <h1>Video</h1>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex'>
                        <div className='content-card'>
                            <img alt="Article icon" src={article}/>
                            <h1>Article</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}