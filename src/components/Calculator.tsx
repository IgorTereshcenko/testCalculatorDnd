import {Draggable} from './Draggable';
import {FC} from 'react'
import { IDraggable } from '../types/dndTypes';

interface calculatorProps {
    draggableOperation:IDraggable[];
    draggableNumber:IDraggable[]
}

const Calculator:FC<calculatorProps> = ({draggableOperation,draggableNumber}) => {

    return (
        <div className="calculator">
            <Draggable id="draggable1">
                <div className="calculator__display">
                    0
                </div>
            </Draggable>
            <Draggable id="draggable2">
                <div className="operation">
                    {draggableOperation.map(item =>
                        <button key={item.id}>{item.name}</button>    
                    )}
                </div>
            </Draggable>
            <Draggable id="draggable3">
                <div className="number">
                    {draggableNumber.map(item =>
                        <button key={item.id}>{item.name}</button>    
                    )}
                </div>
            </Draggable>
            <Draggable id="draggable4">
                <button className="calculator__res">=</button>
            </Draggable>
            
        </div>
    )
}

export default Calculator;