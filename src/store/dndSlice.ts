import {createSlice,PayloadAction, Draft} from '@reduxjs/toolkit';
import { IDraggable } from '../types/dndTypes';

interface dndState {
    sortableItem:IDraggable[];
}

const initialState:dndState = {
    sortableItem:[],
}

export const dndSlice = createSlice({
    name: 'dnd',
    initialState,
    reducers:{
        setSortableItem(state,action) {
            state.sortableItem = [...state.sortableItem, ...action.payload]
        }
    }
})

const {actions,reducer} = dndSlice;
export default reducer;
export const {setSortableItem} = actions;