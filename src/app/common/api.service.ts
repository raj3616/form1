import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url="http://localhost:3000/UserNameList";

  constructor(private _http:HttpClient) { }

  postUser(Userdata:any){
    return this._http.post(this.url,Userdata);
  }
  getUser(){
    return this._http.get(this.url);
  }
  deletebyid(id:number){
   return this._http.delete(this.url+"/"+id)
  }
  upadteuserbyid(data:any){
    return this._http.put(this.url+"/"+data.id,data)
  }

}
