
import React, { Component } from 'react'
import './DivController.css';
import DynamicDivs from './DynamicDivs';

export default class DivController extends Component {
    constructor(props){
        super(props);
        this.state={
            numberOfDivs:""
        }
       this.numInput=React.createRef(); 
    }
    
    handleInputValue(){
        this.setState({numberOfDivs:this.numInput.current.value});
        console.log("Button Clicked");
        console.log(this.numInput.current.value);
        this.numInput.current.value="";
        }

    render() {
        let styles={
            color: "white",
            textAlign: "center",
            marginTop: "70px"
        };
        return (
            <>
                <div className="inp-container" >
                    <label htmlFor="no_of_divs">Enter number of divs:</label>
                    <input type="number"  ref={this.numInput} /> 
                    <input type="submit" value="Submit" onClick={()=>this.handleInputValue(this)} />
                </div>
                <h1 style={styles} >Dynamically generated divs will be shown in the given bellow Container!!!!!!</h1>
                <DynamicDivs numberOfDivs={this.state.numberOfDivs} />
            </>
        )
    }
}
