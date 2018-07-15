export default(state = false ,action) => {
    console.log(action)

    switch(action.type){
        case 'show_my_action':
        return action.payload;

        default : return state;
    }
}