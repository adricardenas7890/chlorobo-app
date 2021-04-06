import { memo } from 'react';
import { useDrop } from 'react-dnd';
import { Row } from 'react-bootstrap';

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

    let className = "dustbin";
    if (lastDroppedItem) {
        className = JSON.stringify(lastDroppedItem.name).replace(/\"/g, "") + "-icon dustbin";
    }
    return (
        <Row>
        <div ref={drop} role="Dustbin" className={className}>

            </div>
        </Row>);
});
