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
           <a onClick={() => changeState('react')}>react</a>
           <Technology tech={currentTech.tech} /> 
        </div>
    )
}