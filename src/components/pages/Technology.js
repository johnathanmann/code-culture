import {useState} from 'react';
import techTypes from '../../assets/tech.json'

export default function Technology(props){
    let techName = (props.tech);
    console.log(techName)
    const wantedTech = techTypes.filter(function(i) {
        return i.name === techName;
      });

      console.log((wantedTech[0].name))
    return(
        <div>
           <h1>tech page</h1>
           <p>{wantedTech[0].name}</p>
        </div>
    )
}