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
   },
   follow(userId: number) {
      return instance.post(`follow/${userId}`)
   },
   unFollow(userId: number){
      return instance.delete(`follow/${userId}`)
   },
   getProfile(userId: number){
      return profileAPI.getProfile(userId)
   },
}
export const profileAPI = {
   getProfile(userId: number){
      return instance.get(`profile/`+ userId)
   },
   getStatus(userId: number){
      return instance.get(`profile/status/`+ userId)
   },
   updateStatus(status: string){
      return instance.put(`profile/status/`,{status: status})
   },
   savePhoto(photoFile: any){
      let formData = new FormData()
      formData.append("image", photoFile)
      return instance.put(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
   },
   saveProfile(profile: any){
      return instance.put(`profile`, profile)
   }
}

export const authAPI = {
   me(){
      return instance.get(`auth/me`)
   },
   login(email: string, password: string , rememberMe = false){
      return instance.post(`auth/login`, {email, password, rememberMe})
   },
   logout(){
      return instance.delete(`auth/login`)
   }
}