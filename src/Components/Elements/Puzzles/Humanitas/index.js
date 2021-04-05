import React from 'react';
import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch } from 'react-redux';
import './index.css';

const Humanitas = () => {
    let dispatch = useDispatch();

    let handleSendResponse = (input) => { 
        // send it somewhere here
        dispatch(SetSolved(7));
        console.log(input);
        alert(input);
        alert("you solved the puzzle");
    }
    return (
        // <div className="castitas-container">
        //     This is the container for Humanitas.
        // </div>
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">&nbsp;</div></div>
            <div className="main-puzzle-holder">
                <div className="humanitas-prompt-div">
                    <p>What does it mean to be human?</p>
                </div>
                <HumanitasInputForm sendResponse={handleSendResponse}/>
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(7));}}> click to solve this puzzle</Button>
                
            
            </div>
        </div>
    )
}

class HumanitasInputForm extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            inputContent: "",
        };
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleSubmit(e) {
        e.preventDefault();
        const response = this.state.inputContent;
        this.props.sendResponse(response);
        this.setState({
            inputContent: ""
        });
    }

    onHandleChange(e) {
        this.setState({
        inputContent: e.target.value
        });
    }


    render() {
        return ( 
            <div className="humanitas-input-container">
                <form onSubmit={this.onHandleSubmit}>
                    <input type="submit" style={{ display: "none" }} />
                    <div className="humanitas-input-div">
                        <textarea className="humanitas-input" value={this.state.inputContent} onChange={this.onHandleChange} type="text"/>
                    </div>
                    <div className="enter-button-div">
                        <Button type="submit" variant="light" id="submitPrompt" onClick={this.onHandleSubmit} >Submit</Button>
                        
                    </div>
                </form>
            </div>
        )
    }

}

export default Humanitas

