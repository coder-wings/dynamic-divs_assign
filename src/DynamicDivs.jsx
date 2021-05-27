import React from 'react'
import './DynamicDivs.css'


export default function DynamicDivs(props) {
    
/* Creating dynamic array and hex values for div color*/
    let items=[];
        for(let i=0;i<props.numberOfDivs;i++){
            
            let hex_value=`#${Math.floor(Math.random()*0xffffff).toString(16)}`;
            items[i]=<div className="dynamic-divs" style={{backgroundColor:hex_value, textAlign:"center" }}>{hex_value}</div>; 
        }
        
    return (
        
        <div className="div-container" >
            { items.map((elem)=>{
                return elem;
            }) }
        </div>
        
    );
}
