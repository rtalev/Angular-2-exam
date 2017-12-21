import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Auth } from '../users/Auth';

@Injectable()
export class AnimalsService {
  constructor(private http: Http, private authService: Auth) {}
  createAnimal(animal) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'bearer ' + this.authService.getToken()
    });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:5000/animals/create', animal, options);
  }

  getAllAnimals(page, search = '') {
    if (search) {
      return this.http.get('http://localhost:5000/animals/all?page=' + page + '&search=' + search);
    }
    return this.http.get('http://localhost:5000/animals/all?page=' + page);
  }
  animalsDetails(id) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'bearer ' + this.authService.getToken()
    });
    const options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:5000/animals/details/' + id, options);
  }

  addReaction(reaction, animalId) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'bearer ' + this.authService.getToken()
    });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:5000/animals/details/' + animalId + '/reaction', reaction, options);
  }
}
