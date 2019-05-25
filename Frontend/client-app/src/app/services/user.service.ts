import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { } 
  
  HOMEURL='http://localhost:3000/users'
  createUser(user){
    return this.http.post(this.HOMEURL,user)

  }
  updateUser(user:any){
    return this.http.post(this.HOMEURL+'/'+user.id,user)

  }

  validateUser(obj){
    return this.http.post(this.HOMEURL+'/validateuser',obj)
  }

  getAllUsers(){
      return this.http.get(this.HOMEURL)
  }

  deleteUser(id){
    return this.http.delete(this.HOMEURL+"/"+id)
}
}
