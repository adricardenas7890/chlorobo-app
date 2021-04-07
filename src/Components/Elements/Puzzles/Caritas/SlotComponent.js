import './index.css'
import {Row } from 'react-bootstrap';


const IconComponent = (props) => {
    let classNameString;
    if (props.lastDroppedItem == null) {
        classNameString = String(props.item) + "-character";
    }
    else {
        classNameString = String(props.item) + "-character-happy";
    }
    return (
  
        <Row>    
                <div className={classNameString}></div>   
        </Row>     

    )
}

export default IconComponent