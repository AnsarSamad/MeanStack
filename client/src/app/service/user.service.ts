import { Injectable } from '@angular/core'
import { Http } from '@angular/http'


@Injectable()
export class UserService {
    constructor(private http: Http) {

    }
    getUsers() {
        return this.http.get('/api/users').map((response) => response.json());
    }
    activate(userId) {
        return this.http.post('/api/users/activate',{"userId":userId}).map((response) => response.json());
    }
}