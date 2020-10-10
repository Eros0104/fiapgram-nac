import React, {
    createContext,
    useReducer
} from 'react';

const PostContext = createContext();

const PostProvider = (props) => {
    return (
        <PostContext.Provider value={{}}>
            { props.children }
        </PostContext.Provider>
    );
};

export default PostContext;