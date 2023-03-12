import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {useState} from 'react'
import {CSS} from '@dnd-kit/utilities';

export function Draggable(props:any) {

  

  const {attributes, listeners, setNodeRef, transform, isDragging, active} = useDraggable({
    id: props.id,
    disabled: props.draggable
  });

  const style = {
    transform: CSS.Translate.toString(transform)
  }


  
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} draggable={isDragging}>
        {props.children}
    </div>
  );
}