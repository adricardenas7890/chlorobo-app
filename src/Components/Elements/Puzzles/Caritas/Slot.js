import { memo } from 'react';
import { useDrop } from 'react-dnd';
const style = {
    height: '100px',
    width: '100px',
    borderRadius: '100%',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};
export const Slot = memo(function Slot({ accept, lastDroppedItem, onDrop, }) {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
    const isActive = isOver && canDrop;
    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }
    return (<div ref={drop} role="Dustbin" class="dustbin">
			{/* {isActive
        ? 'Release to drop'
        : `This dustbin accepts: ${accept.join(', ')}`} */}

			{lastDroppedItem && (<p>{JSON.stringify(lastDroppedItem.name)} dropped.</p>)}
		</div>);
});
