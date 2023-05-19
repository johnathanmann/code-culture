import { useEffect } from 'react';
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

    let icons = {microphone, article, play};

      window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "0px";
        }
        }

        useEffect(() => {
            window.scrollTo(0, 0)
          }, [])
        
        var links = wantedTech[0].links;
        console.log(wantedTech[0].links[0])
    return(
    <article className='container'>
        <div className={wantedTech[0].type}>
            <div id="technology">
                <section className='row'>
                    <header className='col-lg-6 '>
                    <h1 className='header' id="tech-name">{wantedTech[0].name}</h1>
                        <p className='subheading text '>Initial Release: {wantedTech[0].release}</p>
                        <p><a className='subheading text' target="_blank" rel="noreferrer" href={wantedTech[0].docs}>Documentation</a></p>
                    </header>
                    <article className='col-lg-6'>
                        <p className='description'>{wantedTech[0].description}</p>
                    </article>
                </section>
                <section id="learn">
                <h1 className='header text-center'>Learn More</h1>
                    <div id='links'>
                        {links.map((link, index)=>{
                            return <div className='tech-link'>
                            <img className="img-fluid" src={icons[links[index].type]}/> <a className='link-type' target="_blank" rel="noreferrer" href={links[index].href}>{links[index].name}</a>
                        </div>})}
                    </div>
                </section>
            </div>
        </div>
    </article>
    )
    
}