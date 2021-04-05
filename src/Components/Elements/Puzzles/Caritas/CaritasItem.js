import { memo } from 'react';
import { useDrag } from 'react-dnd';
const style = {
    borderRadius:'50%',
    border: '1px dashed gray',
    backgroundColor: 'white',
    height: '100px',
    width: '100px',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
    // backgroundImage: 'url("./"'
};
export const Box = memo(function Box({ name, type, isDropped }) {
    const [{ opacity }, drag] = useDrag(() => ({
        type,
        item: { name },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    }), [name, type]);
    return (<div ref={drag} role="Box" style={{ ...style, opacity }}>
        {isDropped ? <s>{name}</s> : name}
        {/* {isDropped ? emptyImage : image} */}
		</div>);
});

