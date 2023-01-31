import {react, useState} from 'react';
import Technology from './Technology';
export default function Homepage({handlePageChange}){

    const [currentTech, setCurrentTech] = useState({tech:""})
  
    const changeState = (techParamater) => {  
        // handlePageChange('Technology');
        setCurrentTech({tech:techParamater}); 
       }; 
    return(
        <div>
           <h1>Homepage</h1>
        </div>
    )
}