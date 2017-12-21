import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Auth} from '../../users/Auth';

@Injectable()
export class CommentsService {
  constructor(private http: Http, private authService: Auth) {}

  addComment(review, animalId) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'bearer ' + this.authService.getToken()
    });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(`http://localhost:5000/animals/details/${animalId}/comments/create`, review, options);
  }

  getComments(animalId) {
    const headers = new Headers({ 'Accept': 'application/json', 'Authorization': 'bearer ' + this.authService.getToken() });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`http://localhost:5000/animals/details/${animalId}/comments`, options);
  }
}
