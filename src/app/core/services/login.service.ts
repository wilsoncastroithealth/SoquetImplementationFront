import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'https://ismaelruge.bsite.net'



  constructor(private http: HttpClient) {  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/api/login`, data);
  }
}
