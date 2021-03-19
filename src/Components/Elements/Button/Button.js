import React from 'react';
import { Button } from 'react-bootstrap/Button';


// The goal of this file is to define main button types, such as the main menu buttons, enter page button, continue story sequence button, and any others.
let SomeButton = (props) => {
    return (
        <div>
            <Button variant="light">Enter</Button>
        </div>
    )
}

export default SomeButton;