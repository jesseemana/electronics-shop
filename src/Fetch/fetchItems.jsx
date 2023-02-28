import axios from 'axios'

const fetchItems = async () => {
    axios.create( {
        baseURL: 'http://localhost:8000'
    })
}

export const getItems = async () => {
    const response = await axios.get( '/products' );
    return response.data
    // return response.json()
}

export default fetchItems;
