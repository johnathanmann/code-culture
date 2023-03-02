import techTypes from '../../assets/tech.json'
import "../../styles/technology.css";

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

    return(
        <div>
            <div className='container' id="technology">
                <div className='row'>
                    <div className='col-4 '>
                    <h1 className='header pink'>{wantedTech[0].name}</h1>
                        <p className='subheading text '>Initial Release: {wantedTech[0].release}</p>
                        <p><a className='subheading text ' target="_blank" href={wantedTech[0].docs}>Documentation</a></p>
                    </div>
                    <div className='col-6'>
                        <p className='description'>{wantedTech[0].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}