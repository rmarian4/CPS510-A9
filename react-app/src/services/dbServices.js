import axios from "axios";

const connection = 'http://localhost:3001';

export const getSimpleQueryResults = async () => {
    let response = await axios.get(`${connection}/db/simpleQueries`)
    return response.data;
}

export const getAdvancedQueryResults = async () => {
    let response = await axios.get(`${connection}/db/advancedQueries`)
    return response.data
}

export const createDBTables = async () => {
    await axios.post(`${connection}/db/createTables`)
}

export const populateDBTables = async () => {
    await axios.post(`${connection}/db/populateTables`)
}

export const dropDBTables = async () => {
    await axios.delete(`${connection}/db/dropTables`)
}