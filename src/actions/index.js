import { SHOW_MY_ACTION,
        SELECTED_ITEM } from './type'
     
export const showMyAction = (status) => {
    return{
        type:SHOW_MY_ACTION,
        payload:status
    }
}

export const selectedItemAction = (selectedItem) => {
    return{
        type: SELECTED_ITEM,
        payload: selectedItem
    }
}

