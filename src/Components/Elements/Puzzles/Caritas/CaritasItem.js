import { memo } from 'react';
import { useDrag } from 'react-dnd';
import bone from './item-bone.png';
import seed from './item-seed.png';
import cheese from './item-cheese.png';
import fish from './item-fish.png';
import carrot from './item-carrot.png';


const style = {
    borderRadius:'50%',
    border: '1px dashed gray',
    height: '100px',
    width: '100px',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
    // backgroundImage: `url(${bone})`,
    backgroundSize: 'contain'
};
export const Box = memo(function Box({ name, type, isDropped }) {
    let backgroundImage;
    if (isDropped) {
        backgroundImage = 'none';
    } 
    else if (name === "bone") {
        backgroundImage = `url(${bone})`;
    }
    else if (name === "seed") {
        backgroundImage = `url(${seed})`;

    }
    else if (name === "fish") {
        backgroundImage = `url(${fish})`;        

    }
    else if (name === "carrot") {
        backgroundImage = `url(${carrot})`;        

    }
    else if (name === "cheese") {
        backgroundImage = `url(${cheese})`;        

    }
    
    const [{ opacity }, drag] = useDrag(() => ({
        type,
        item: { name },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    }), [name, type]);
    return (<div ref={drag}  style={{ ...style, opacity, backgroundImage }}>
        {/* {isDropped ? <s>{name}</s> : name} */}
        {/* {isDropped ? emptyImage : image} */}
		</div>);
});

