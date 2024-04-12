import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  url = 'https://ismaelruge.bsite.net'



  constructor(private http: HttpClient) {  }

  ConsultChat(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/api/Chat/ConsultChat`, data);
  }
  ConsultChatAll(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/api/Chat/ConsultChatAll`, data);
  }

  saveMessage(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/api/Chat/SaveChat`, data);
  }


}
