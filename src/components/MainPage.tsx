import Calculator from "./Calculator";
import Constructor from '../components/Constructor';
import {DndContext} from '@dnd-kit/core';
import {Droppable} from './Droppable';
import { IDraggable } from "../types/dndTypes";
import { useAppDispatch } from "../hooks/redux";
import { setSortableItem } from "../store/dndSlice";

const MainPage = () => {

	const draggableOperation:IDraggable[] = [
		{name:'/', id:1},
		{name:'X', id:1},
		{name:'-', id:1},
		{name:'+', id:1}
	];

	const draggableNumber:IDraggable[] = [
		{name:'7', id:2},
		{name:'8', id:2},
		{name:'9', id:2},
		{name:'4', id:2},
		{name:'5', id:2},
		{name:'6', id:2},
		{name:'1', id:2},
		{name:'2', id:2},
		{name:'3', id:2},
		{name:'0', id:2},
		{name:',', id:2},
	];

	const dispatch = useAppDispatch();

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Calculator 
				draggableOperation={draggableOperation}
				draggableNumber={draggableNumber}/>
            <Droppable>
                <Constructor/>
            </Droppable>
        </DndContext>
    )

  	function handleDragEnd(event:any) {
    	const {over,active} = event;

		if(over && active.id === 'draggable2') {
			dispatch(setSortableItem(draggableOperation));
		} else if (over && active.id === 'draggable3') {
			dispatch(setSortableItem(draggableNumber));
		}
  }
  
}

export default MainPage;