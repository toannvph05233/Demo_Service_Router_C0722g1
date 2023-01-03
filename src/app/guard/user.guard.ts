import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Account} from "../model/Account";
import {isFromDtsFile} from "@angular/compiler-cli/src/ngtsc/util/src/typescript";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  account !: Account;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let str = localStorage.getItem("userToken");
    if (str != null) {
      // @ts-ignore
      this.account = JSON.parse(localStorage.getItem("userToken"));
      for (let i = 0; i < this.account.roles.length; i++) {
        if (this.account.roles[i].name == 'ROLE_USER'){
          return true;
        }
      }
    }
    return false;

  }

}
