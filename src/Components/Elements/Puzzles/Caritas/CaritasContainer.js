import { useState, useCallback, memo } from 'react';
import { Slot } from './Slot';
import { Box } from './CaritasItem';
import  SlotComponent  from './SlotComponent';
import { ItemTypes } from './CaritasTypes';
import update from 'immutability-helper';
import { Row, Col } from 'react-bootstrap';
export const Container = memo(function Container() {
    const [dustbins, setDustbins] = useState([
        { accepts: [ItemTypes.DOG], lastDroppedItem: null },
        { accepts: [ItemTypes.CAT], lastDroppedItem: null },
        { accepts: [ItemTypes.RABBIT], lastDroppedItem: null },  
        { accepts: [ItemTypes.MOUSE], lastDroppedItem: null }, 
        { accepts: [ItemTypes.BIRD], lastDroppedItem: null }, 
        // {
        //     accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
        //     lastDroppedItem: null,
        // },
        // { accepts: [ItemTypes.PAPER, NativeTypes.FILE], lastDroppedItem: null },
    ]);
    const [boxes] = useState([
        { name: 'seed', type: ItemTypes.BIRD, icon: "bird" },
        { name: 'fish', type: ItemTypes.CAT },
        { name: 'bone', type: ItemTypes.DOG },
        { name: 'carrot', type: ItemTypes.RABBIT },
        { name: 'cheese', type: ItemTypes.MOUSE }
    ]);
    const [droppedBoxNames, setDroppedBoxNames] = useState([]);
    function isDropped(boxName) {
        return droppedBoxNames.indexOf(boxName) > -1;
    }
    const handleDrop = useCallback((index, item) => {
        const { name } = item;
        setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
        setDustbins(update(dustbins, {
            [index]: {
                lastDroppedItem: {
                    $set: item,
                },
            },
        }));
    }, [droppedBoxNames, dustbins]);
    return (<div>
            {/* <div style={{ overflow: 'hidden', clear: 'both' }}>
            {dustbins.map(({ accepts, lastDroppedItem}, index) => (<SlotComponent item={accepts}/>))}
			</div> */}
			<Row >
            {dustbins.map(({ accepts, lastDroppedItem }, index) => (
                <>
                    <SlotComponent item={accepts} />
                    <Slot accept={accepts} lastDroppedItem={lastDroppedItem} onDrop={(item) => handleDrop(index, item)} key={index} />
                </>))}
			</Row>
            <Row>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Col>
                    {boxes.map(({ name, type }, index) => (<Box name={name} type={type} isDropped={isDropped(name)} key={index} />))}
                </Col>
            </div>
            </Row>
		</div>);
});
