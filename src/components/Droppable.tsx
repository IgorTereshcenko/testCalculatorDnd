import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props:any) {
    
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  
  const style = {
    background: isOver ? '#F0F9FF' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
        {props.children}
    </div>
  );
}