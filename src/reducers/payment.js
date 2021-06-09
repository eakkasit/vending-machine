
function payments(state = 0, action) {
    switch (action.type) {
        case 'ADD_PAYMENT':
            return state + action.value;
        case 'PURCHASE_PAYMENT':
            return state - action.value;
        default:
            return state;
    }
}
  
export default payments;
