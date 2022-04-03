import { HttpClient, HttpClientJsonpModule, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Client } from '../models/Client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientListService {

  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllClients(): Observable<Client> {
    return this.httpClient.get<Client>(this.apiUrl);
  }
}
