import {react, useState} from 'react';
import "../../styles/homepage.css";

export default function Homepage({handlePageChange}){
    return(
        <div id="homepage">
           <div id="header-background">
            <div id="homepage-header">
                <h1 id="homepage-header1">code culture</h1>
                <h1 id="homepage-header2">a love letter to the web</h1>
            </div>
           </div>
        </div>
    )
}