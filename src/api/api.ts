import axios from "axios";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers:{
      "API-KEY" :"a22037d2-5c98-4d70-ad45-1b7b1066eaea"
   },
})

export const usersAPI = {
   getUsers (currentPage:number = 1,pageSize:number = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(res=> res.data)
   }
}