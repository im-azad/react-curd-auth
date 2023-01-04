import axios from "axios";

export default axios.create({
    baseURL: 'https://react-curd-f3321-default-rtdb.asia-southeast1.firebasedatabase.app/'
})