import React, {useRef} from 'react';
import {  Row, Col  } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch } from 'react-redux';

const IndustriaInputFields = (props) => {
    let dispatch = useDispatch();
    const orInput = useRef(null);
    const andInput = useRef(null);
    const notInput = useRef(null);

    const disabledFlag = false;

    const inputCheck = () => { 
        let orValue = orInput.current?.value;
        let andValue = (andInput.current?.value);
        let notValue = (notInput.current?.value);
        if (orValue === "2" && andValue === "3" && notValue === "5") {
            props.onSolved();
            dispatch(SetSolved(3));
        }
    }
    if (disabledFlag === false) {
        return (
            <Row className="counter-inputs-row">
                <Col>
                    <input ref={orInput} type="number" onChange={inputCheck} className="counter-input" id="orCounter" name="orCounter" step="1" min="1" max="10" />
                </Col >
                <Col >
                    <input ref={andInput} type="number" onChange={inputCheck} className="counter-input" id="andCounter" name="andCounter" step="1" min="1" max="10" />
                </Col>
                <Col >
                    <input ref={notInput} type="number" onChange={inputCheck} className="counter-input" id="notCounter" name="notCounter" step="1" min="1" max="10" />
                </Col>
            </Row>
        )
    }
    else {
        return (
            <Row className="counter-inputs-row">
                <Col>
                    <input ref={orInput} type="number" disabled={true}  className="counter-input" id="orCounter" name="orCounter" step="1" min="1" max="10" />
                </Col >
                <Col >
                    <input ref={andInput} type="number" disabled={true} className="counter-input" id="andCounter" name="andCounter" step="1" min="1" max="10" />
                </Col>
                <Col >
                    <input ref={notInput} type="number" disabled={true}  className="counter-input" id="notCounter" name="notCounter" step="1" min="1" max="10" />
                </Col>
            </Row>
        )
    }
}

export default IndustriaInputFields;