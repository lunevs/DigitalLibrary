import axios from "axios";
import qs from "qs";
const baseUrl = 'http://localhost:3003/';

const getAll = () => {
    const request = axios.get(`${baseUrl}books`)
    return request.then(response => response.data);
}

const create = (newObject) => {
    const request = axios.post
        (
            `${baseUrl}book`,
            qs.stringify(newObject),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        )
    return request.then(response => response.data);
}

const update = (id, newObject) => {
    const request = axios.post
    (
        `${baseUrl}book/${id}`,
        qs.stringify(newObject),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
    )
    return request.then(response => response.data);
}

const bookService = {getAll, create, update};
export default bookService;
