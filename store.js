import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import data from './API/data.json'

//initial state
const startState={
    cards:[]
}

//action creator
export const initialCards=()=>{
    return {
        type:'INITIALCARDS',
        cards:data
    }
}
//reducers
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'INITIALCARDS':
            return {
                cards:action.cards
            }
        default: return state
    }
}
//create store
const store=(initialState=startState)=>{
    return createStore(reducer,initialState);
};

export const initStoreWrapper=createWrapper(store);