import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container'

// This will contain the header (which may be hidden for introduction) and the body of the page
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        view: [
            {
            
                storySequencePage: {header: false, }, // Anything that involves writing, header hidden
                mainMenuPage: {header: true,}, // Select puzzle view
                startPage: {header: false},
                puzzleProgressPage: { header: true },
                helpPage: { header: true },
                puzzleCompletePage: { header: true },
                
            }
        ],
        stepNumber: 0,
        xIsNext: true
        };
    }

    renderContent() {
        return (
        < Content />
        )
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }

}


var Content = (props) => 
{

    return (
        <div>
            <header className="App-header">
                <div> This div contains the layout.</div>

                {/* <img src={logo} className="App-logo" alt="logo" />
                <Counter />
                <NavigationBar/>
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <span>
                <span>Learn </span>
                <a
                    className="App-link"
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React
                </a>
                <span>, </span>
                <a
                    className="App-link"
                    href="https://redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Redux
                </a>
                <span>, </span>
                <a
                    className="App-link"
                    href="https://redux-toolkit.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Redux Toolkit
                </a>
                ,<span> and </span>
                <a
                    className="App-link"
                    href="https://react-redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React Redux
                </a>
                </span> */}
            </header>
        </div>
    )
    // if (props.screen == "menu") {
        
    //     <div>
    //         Menu Screen
    //     </div>
        
    // }
    // else if (props.screen == "puzzle") {
    //     <div>
    //         Puzzle Screen
    //     </div>
    // }

    // else if (props.screen == "story") {
    //     <div>
    //         Story Sequence
    //     </div>
    // }
}
export default Layout;