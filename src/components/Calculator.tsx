import {Draggable} from './Draggable';
import {FC} from 'react'
import { IPanels } from '../types/dndTypes';
import '../style/calculator.scss';

interface calculatorProps {
    panels:IPanels[]
}

const Calculator:FC<calculatorProps> = ({panels}) => {

    return (
        <div className="calculator">
            <Draggable id="draggable1">
                <div className="calculator__display">
                    {panels[0].buttons.map(btn =>
                        <div>{btn.text}</div>    
                    )}   
                </div>
            </Draggable>
            <Draggable id="draggable2">
                <div className="calculator__operation">
                    {panels[1].buttons.map(btn =>
                        <button className='calculator__operationBtns'>{btn.text}</button>    
                    )} 
                </div>
            </Draggable>
            <Draggable id="draggable3">
                <div className="calculator__number">
                    {panels[2].buttons.map(btn =>
                        <button className='calculator__numberBtns'>{btn.text}</button>    
                    )}
                </div>
            </Draggable>
            <Draggable id="draggable4">
                <div className='calculator__res'>
                    {panels[3].buttons.map(btn =>
                        <button className='calculator__resBtn'>{btn.text}</button>    
                    )} 
                </div>
            </Draggable>
            
        </div>
    )
}

export default Calculator;