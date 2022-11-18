import axios from 'axios'

const connection = 'http://localhost:3001';

export const getCourses = async () => {
    let response = await axios.get(`${connection}/courses`)
    return response.data;
}