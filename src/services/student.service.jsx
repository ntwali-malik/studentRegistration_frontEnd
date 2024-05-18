import httpClient from '../http-common';

const getAll = () =>{
    return httpClient.get();
}
export default {getAll};