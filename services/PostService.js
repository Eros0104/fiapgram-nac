import axios from 'axios';

const getPosts = () => {
    return axios({
        method : 'get',
        url : 'http://douglascabral.com.br/fiapgram/posts.json'
    })
}

export {getPosts};