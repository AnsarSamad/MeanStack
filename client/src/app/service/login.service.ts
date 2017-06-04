
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class LoginService {
    loggedIn: boolean = false;
    isAdmine: boolean = false;
    constructor(private http: Http) {

    }
    loging(email, password) {
        return this.http.post('/api/validate/login', { email: email, password: password })
            .map(result => result.json())
    }

    setLoginStatus(login: boolean) {
        this.loggedIn = login;
    }
    isLoggedIn(): boolean {
        return this.loggedIn;
    }
    setAdmin(isadmin: boolean) {
        this.isAdmine = isadmin;
    }
    isAdmineUser(): boolean {
        return this.isAdmine;
    }

}