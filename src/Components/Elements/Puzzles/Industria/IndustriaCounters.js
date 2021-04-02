import React from 'react';
import AndCounter from './industria-gateIcon-and.png';
import OrCounter from './industria-gateIcon-or.png';
import NotCounter from './industria-gateIcon-not.png'

const IndustriaCounters = (props) => { 
    let counter = props.counterName;
    let image;
    if (counter === "and") {
        image = <img src={AndCounter} className="counter-image" alt = "Gate Icon And"></img>
    }
    else if (counter === "not") {
        image = <img src={NotCounter} className="counter-image" alt = "Gate Icon Not"></img>
    }
    else if (counter === "or") {
        image = <img src={OrCounter} className="counter-image" alt = "Gate Icon Or"></img>

    }
    return (
        <div className="counter-icon">
            {image}
        </div>
    )
}

export default IndustriaCounters;