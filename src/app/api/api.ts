import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.publicapis.org/entries'
})

export const api2 = axios.create({
    baseURL: 'https://randomuser.me/api/'
})

export const catalogApi = {
    getCatalog(){
        return api.get('').then((r)=>r.data)
    },
}
export const profileApi = {
    getProfile(){
        return api2.get('').then((r)=>r.data)
    },
}