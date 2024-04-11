import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'https://ismaelruge.bsite.net'



  constructor(private http : HttpClient) {
   }


   getUser():Observable<any> {
    return this.http.get<any>(`${this.url}/api/usuarios`);
   }

}
