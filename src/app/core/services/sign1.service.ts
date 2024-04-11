import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Sign1Service {

  url = 'https://ismaelruge.bsite.net'



  constructor(private http : HttpClient) {



   }



   getInfoSign1():Observable<any> {
    return this.http.get<any>(`${this.url}/api/PruebaSignalR1`);
   }

   create(data: any){
    return this.http.post<any>(`${this.url}/api/PruebaSignalR1`, data);
  }


   update(data: any){
    return this.http.put<any>(`${this.url}/api/PruebaSignalR1`, data);
  }

   delete(id : number){
    return this.http.delete<any>(`${this.url}/api/PruebaSignalR1/${id}`);
   }
}
