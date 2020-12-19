import axios from 'axios';

const dbInstance = axios.create({
  baseURL: 'https://react-burger-331f0-default-rtdb.europe-west1.firebasedatabase.app/',
});



export default dbInstance;