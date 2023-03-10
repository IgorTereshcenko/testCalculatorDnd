import '../style/constructor.scss';
import {FC} from 'react';
import { IPanels } from '../types/dndTypes';
import { Draggable } from './Draggable';
import {
    DndContext, 
    closestCenter,
    closestCorners,
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

interface ConstructorProps {
    sortableItem:IPanels[];
    setSortableItem: React.Dispatch<React.SetStateAction<IPanels[]>>
}



const Constructor:FC<ConstructorProps> = ({sortableItem,setSortableItem}) => {

    console.log(sortableItem)

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
          coordinateGetter: sortableKeyboardCoordinates,
        })
    );


    function handleDragEnd(event: any) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setSortableItem((sortableItem) => {
                const oldIndex = sortableItem.findIndex((item) => item.id === over.id);
                const newIndex = sortableItem.findIndex((item) => item.id === active.id);
                return arrayMove(sortableItem, oldIndex, newIndex);
            });
        }
    }
    
    return (
        <div className="constructor">
            {!sortableItem.length ? 
                <div>
                    <span>Перетащите сюда</span>
                    <span>Любой элемент из левой панели</span>
                </div>
                :
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={sortableItem} strategy={verticalListSortingStrategy}>
                        <div className="panels">
                            {sortableItem.map((item) => (
                                <SortableItem id={item.id}>
                                    <div className={item.id === 'panel0' ? 'panel0' : item.id === 'panel1' ? 'panel1' : item.id === 'panel2' ? 'panel2' : 'panel3'}>
                                        {item.buttons.map((btn) => (
                                            <div>{btn.text}</div>
                                        ))}
                                    </div>    
                                </SortableItem>
                            ))}
                        </div>
                    </SortableContext>
            </DndContext>}   
        </div>
      
    )
}

export default Constructor;