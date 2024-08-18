import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

const getResponseData = (request) => {
    return request.then(response => response.data);
}

const getAll = () => {
    return getResponseData(axios.get(baseUrl));
}

const create = (newPerson) => {
    return getResponseData(axios.post(baseUrl, newPerson));
}

const update = (id, updatedPerson) => {
    return getResponseData(axios.put(`${baseUrl}/${id}`, updatedPerson));
}

const remove = (id) => {
    return getResponseData(axios.delete(`${baseUrl}/${id}`));
}

export default {
    getAll,
    create,
    update,
    remove,
};