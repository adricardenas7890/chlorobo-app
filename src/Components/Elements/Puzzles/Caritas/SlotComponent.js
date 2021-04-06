import { memo } from 'react';
import { useDrop } from 'react-dnd';
import './index.css'
import { Col } from 'react-bootstrap';


const IconComponent = (props) => {
    let classNameString;
    if (props.isDropped == null) {
        classNameString = String(props.item) + "-character";
    }
    else {
        classNameString = String(props.item) + "-character-happy";
    }
    return (
        <Col className={classNameString}>          
        </Col>
    )
}

export default IconComponent