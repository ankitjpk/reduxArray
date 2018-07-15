import {SELECTED_ITEM} from '../actions/type'
 
const INITIAL_STATE = []

export default(state = INITIAL_STATE ,action) => {  
    switch(action.type){
        case SELECTED_ITEM:  
            if(state.includes(action.payload)) {
                return state.filter(value => value !== action.payload);
            }
            return [...state, action.payload];
          
        default : return state;
    }
}
 