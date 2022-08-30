import axios  from "axios";

const request = axios.create({
    baseURL: 'https://630c5ca553a833c53428fceb.mockapi.io/'
});
export const get = async (api,option = {}) =>{
    const response = await request.get(api,option);
    return response.data;
}
export default request;

