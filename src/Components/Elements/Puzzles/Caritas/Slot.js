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

    let classNameString = "dustbin";
    if (lastDroppedItem) {
        classNameString = JSON.stringify(lastDroppedItem.name).replace(/"/g, "") + "-icon dustbin";
    }
    return (
        <Row>
        <div ref={drop} aria-label="Dustbin" className={classNameString}>

            </div>
        </Row>);
});
