import { useEffect } from 'react';
import techTypes from '../../assets/tech.json'
import "../../styles/technology.css";
import microphone from "../../assets/imgs/microphone.png";
import play from "../../assets/imgs/play.png";
import article from "../../assets/imgs/article.png";
let icons = {microphone, article, play};

export default function Technology(props){

    let techName = (props.tech);
    console.log(techName)
    const wantedTech = techTypes.filter(function(i) {
        return i.name === techName;
      });

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
                            <img className="img-fluid" alt={icons[links[index].type]} src={icons[links[index].type]}/> <a className='link-type' target="_blank" rel="noreferrer" href={links[index].href}>{links[index].name}</a>
                        </div>})}
                    </div>
                </section>
            </div>
        </div>
    </article>
    )
    
}