interface actionInterface {
    type: string,
    payload: any
}

const reducers = (posts = [], action: actionInterface) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        // case 'GET_POST':
        //     return action.payload;
        default:
            return posts;
    }
}

export default reducers