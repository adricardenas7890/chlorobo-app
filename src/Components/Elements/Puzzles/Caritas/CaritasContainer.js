import { useState, useCallback, memo } from 'react';
import { Slot } from './Slot';
import { Box } from './CaritasItem';
import { ItemTypes } from './CaritasTypes';
import update from 'immutability-helper';
export const Container = memo(function Container() {
    const [dustbins, setDustbins] = useState([
        { accepts: [ItemTypes.DOG], lastDroppedItem: null },
        { accepts: [ItemTypes.CAT], lastDroppedItem: null },
        { accepts: [ItemTypes.BUNNY], lastDroppedItem: null },  
        { accepts: [ItemTypes.MOUSE], lastDroppedItem: null }, 
        { accepts: [ItemTypes.PARROT], lastDroppedItem: null }, 
        // {
        //     accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
        //     lastDroppedItem: null,
        // },
        // { accepts: [ItemTypes.PAPER, NativeTypes.FILE], lastDroppedItem: null },
    ]);
    const [boxes] = useState([
        { name: 'seed', type: ItemTypes.PARROT },
        { name: 'milk', type: ItemTypes.CAT },
        { name: 'bone', type: ItemTypes.DOG },
        { name: 'carrot', type: ItemTypes.BUNNY },
        { name: 'cheese', type: ItemTypes.MOUSE },


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
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				{dustbins.map(({ accepts, lastDroppedItem }, index) => (<Slot accept={accepts} lastDroppedItem={lastDroppedItem} onDrop={(item) => handleDrop(index, item)} key={index}/>))}
			</div>

			<div style={{ overflow: 'hidden', clear: 'both' }}>
				{boxes.map(({ name, type }, index) => (<Box name={name} type={type} isDropped={isDropped(name)} key={index}/>))}
			</div>
		</div>);
});
