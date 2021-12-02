const INTIAL_STATE = {
    fav : [],
    check:{},
    counter : 0
}
let arr =[];
export default function favoriteReducer(state = INTIAL_STATE , action) {
    switch (action.type) {
        case 'SET_FAVORITE':
            arr.push(action.payload);
           return {
                ...state,
               data :  arr ,
               counter : arr.length
            };
            // arr.push(fav)
            // return arr;   
        case 'DELETE_FAVORITE':
            arr =arr.filter((item)=>{return item.id !== action.payload })
            return  {
                ...state,
               data :  arr ,
               counter : arr.length

            };
        case 'COUNTER_FAVORITE':
            return  {
                ...state,
                counter : arr.length
            }
        // case 'CHECK_CLICK':
        //   let check =arr.some((item)=>{
        //       if(item.fav.id !== action.payload){return true}else return false});
        //   console.log(check)
        //     state.check ={
        //         checkclick : check
        //     };
        //     return state.check;
        default:
            return arr;
    }

}