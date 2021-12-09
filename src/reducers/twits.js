const reducer = (twits = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ...twits, action.payload ];
        default:
            return twits;
    }
}

export default reducer;