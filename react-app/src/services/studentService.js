import axios from 'axios';

const connection = 'http://localhost:3001';

export const getStudent = async (studentId) => {
    let response = await axios.get(`${connection}/students/${studentId}`)
    return response.data
}

