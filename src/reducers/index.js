import {combineReducers} from 'redux';
import ShowMyProps from './ShowMyProps'
import ListReducer from './ListReducers'
import SelectedItemReducer from './SelectedItemReducer'

export default combineReducers({
    showMyProps:ShowMyProps,
    listReducer:ListReducer,
    selectedReducer:SelectedItemReducer
})