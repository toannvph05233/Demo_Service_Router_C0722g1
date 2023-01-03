import { Injectable } from '@angular/core';
import {Account} from "../model/Account";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../model/Role";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  login(username: string, password: string): Observable<Account>{
    let url = "http://localhost:8080/login";
    let user = {
      username: username,
      password: password
    }
    return this.http.post<Account>(url,user);
  }

  findAllRole(idUser: number): Observable<Role[]>{
    let url = "http://localhost:8080/roles/" + idUser;
    return this.http.get<Role[]>(url);
  }
}
