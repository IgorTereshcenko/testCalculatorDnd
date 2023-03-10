import '../style/constructor.scss';
import {FC} from 'react';
import { useAppSelector } from '../hooks/redux';
import {
    DndContext, 
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from './SortableItem';

const Constructor:FC = () => {

    const {sortableItem} = useAppSelector(store => store.dndReducer);

    console.log(sortableItem)
   
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
          coordinateGetter: sortableKeyboardCoordinates,
        })
    );

  
   function handleDragEnd(event:any) {
        
        const {active, over} = event;
       
        if (active.id !== over.id) {
            const oldIndex = sortableItem.findIndex(item => item.id === active.id);
            const newIndex = sortableItem.findIndex(item => item.id === over.id);
            arrayMove(sortableItem,oldIndex,newIndex)
        } 
    }
    
    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}>
                <SortableContext items={sortableItem} strategy={verticalListSortingStrategy} >
                    <div className="constructor">
                        {sortableItem.map(item =>
                            <SortableItem id={item.id} name={item.name}/>
                        )} 
                    </div>   
                </SortableContext>        
        </DndContext>
      
    )
}

export default Constructor;