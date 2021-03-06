import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuarioService {

  private url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  getUsuarios() {
    return this.httpClient.get(`${this.url}/usuarios`);
  }

}
