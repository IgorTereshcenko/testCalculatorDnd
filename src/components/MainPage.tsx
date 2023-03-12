import Calculator from "./Calculator";
import Constructor from '../components/Constructor';
import {DndContext} from '@dnd-kit/core';
import {Droppable} from './Droppable';
import { IPanels } from "../types/dndTypes";
import { useState } from "react";


const MainPage = () => {

	const panels:IPanels[] = [
		{
			id: 'panel0',
			buttons: [{id: 'button0', text: '0'}],
		},
        {
          id: 'panel1',
          buttons: [
            { id: 'button1', text: '/' },
            { id: 'button2', text: 'X' },
            { id: 'button3', text: '-' },
            { id: 'button4', text: '+' },
          ],
        },
        {
          id: 'panel2',
          buttons: [
            { id: 'button5', text: '7' },
            { id: 'button6', text: '8' },
            { id: 'button7', text: '9' },
            { id: 'button8', text: '4' },
			{ id: 'button9', text: '5' },
			{ id: 'button10', text: '6' },
			{ id: 'button11', text: '1' },
			{ id: 'button12', text: '2' },
			{ id: 'button13', text: '3' },
			{ id: 'button14', text: '0' },
			{ id: 'button11', text: ',' },
          ],
        },
		{
			id: 'panel3',
			buttons: [{id: 'button12', text: '='}],
		}
		
      ];

	const [sortableItem, setSortableItem] = useState<IPanels[]>([]);
	
    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Calculator 
				panels={panels}/>
            <Droppable>
                <Constructor
					sortableItem={sortableItem}
					setSortableItem={setSortableItem}/>
            </Droppable>
        </DndContext>
    )

  	function handleDragEnd(event:any) {
    	const {over,active} = event;
		
		console.log(active);
		
		if(over && active.id === 'draggable1') {
			const display = panels.filter(item => item.id === 'panel0')
			setSortableItem([...sortableItem, ...display])
		} else if (over && active.id === 'draggable2') {
			const number = panels.filter(item => item.id === 'panel1')
			setSortableItem([...sortableItem, ...number])
		} else if (over && active.id === 'draggable3') {
			const operation = panels.filter(item => item.id === 'panel2')
			setSortableItem([...sortableItem, ...operation])
		} else if (over && active.id === 'draggable4') {
			const res = panels.filter(item => item.id === 'panel3')
			setSortableItem([...sortableItem, ...res])
		}
  }
  
}

export default MainPage;