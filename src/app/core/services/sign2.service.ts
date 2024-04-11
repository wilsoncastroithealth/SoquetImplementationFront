import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Sign2Service {


  url = 'https://ismaelruge.bsite.net'



  constructor(private http : HttpClient) {



   }



   getInfoSign1():Observable<any> {
    return this.http.get<any>(`${this.url}/api/PruebaSignalR2`);
   }

   create(data: any){
    return this.http.post<any>(`${this.url}/api/PruebaSignalR2`, data);
  }


   update(data: any){
    return this.http.put<any>(`${this.url}/api/PruebaSignalR2`, data);
  }

   delete(id : number){
    return this.http.delete<any>(`${this.url}/api/PruebaSignalR2/${id}`);
   }

  }
