export const depositMoney = (amount) => {
    return (dispatch) =>{  // dispatch is a function
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
};
export const withdrawMoney = (amount) => {
    return (dispatch) =>{
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
};
