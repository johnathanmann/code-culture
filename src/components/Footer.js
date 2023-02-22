import logo from "../assets/imgs/cc-logo.png";
import "../styles/footer.css";

export default function Footer(){
 return(
    <div className="container-fluid text-center" id="footer">
        <img src={logo} alt="Code culture logo which is the letter C inside a larger letter C"/>
        <h2>Code Culture</h2>
    </div>
 )
};