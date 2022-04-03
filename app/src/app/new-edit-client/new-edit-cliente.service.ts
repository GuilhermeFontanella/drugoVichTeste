import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Client } from '../models/Client.model';

@Injectable({
  providedIn: 'root'
})
export class NewEditClienteService {

  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getOneClient(idClient: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.apiUrl}/${idClient}`);
  }

  signUpNewClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.apiUrl, client);
  }

  updateClient(clientId: number, client: Client): Observable<Client> {
    return this.httpClient.put<Client>(`${this.apiUrl}/${clientId}`, client);
  }
}
