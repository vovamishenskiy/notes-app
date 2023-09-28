/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/user'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = newObject => {
    const req = axios.post(baseUrl, newObject)
    return req.then(res => res.data)
}

const update = (id, newObject) => {
    const req = axios.put(`${baseUrl}/${id}`, newObject)
    return req.then(res => res.data)
}

const deleteUser = id => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.then(res => res.data)
}

export default {getAll, create, update, deleteUser}