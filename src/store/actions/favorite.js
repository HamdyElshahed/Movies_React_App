export  const setfavorite = (data) =>{
    return {
        type: 'SET_FAVORITE',
        payload : data
    };
};

export const delfavotite = (id) =>{
    return {
        type : 'DELETE_FAVORITE',
        payload : id
    }
}
export const counterfavotite = () =>{
    return {
        type : 'COUNTER_FAVORITE',
    }
}
// export const checkclick = (id) =>{
//     return {
//         type : 'CHECK_CLICK',
//         payload : id
//     }
// }