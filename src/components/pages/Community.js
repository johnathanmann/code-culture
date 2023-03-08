import { useEffect } from "react";
import "../../styles/community.css";

export default function Community(){

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

    return(
        <div id="community">
            <h1>Community</h1>
        </div>
    )
}