let arr = []; 
export default function movieReducer(state = arr , action){
    switch (action.type) {
        case 'GET_MOVIE':
            arr= action.payload 
            return arr;
        default :
            return state;
    }
}