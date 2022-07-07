import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';

const headers = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }
  addUser(user:Object):Observable<Object>{
    return this.http.post("http://localhost:3000/reservations",user,headers);
  }
  getUser():Observable<Object>{
    return this.http.get("http://localhost:3000/reservationlist");
  }
  editUser(id,user:object):Observable<Object>{
    return this.http.put("http://localhost:3000/reservations/"+id,user);
  }
  edit(id):Observable<Object>{
    return this.http.get("http://localhost:3000/reservations/"+id);
  }
  deleteUser(id):Observable<Object>{
    return this.http.delete("http://localhost:3000/reservations/"+id);
  }
}
