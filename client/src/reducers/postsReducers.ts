interface actionInterface {
    type: string,
    payload: object
}

export default (posts = [], action: actionInterface) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}