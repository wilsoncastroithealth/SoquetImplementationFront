import { HttpClient,  } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingnalrService {

  url = 'https://ismaelruge.bsite.net'
  // url = 'https://localhost:7100'
  public hubConnection: signalR.HubConnection;

  messageNotification: EventEmitter<string> = new EventEmitter<string>();
  sign1Emmiter: EventEmitter<any> = new EventEmitter<any>();
  sign2Emmiter: EventEmitter<any> = new EventEmitter<string>();
  messageRecibed : EventEmitter<any> = new EventEmitter<any>();

  constructor(private HTTP : HttpClient) {

    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${this.url}/message`)
      .build();
    this.hubConnection.start().then(() => {
      console.log('Esta Conectado')
    }).catch((error) => console.error(error.message))


    //Escuchar el evento mensaje
    this.hubConnection.on("sendMessage", (message) => {
      this.messageNotification.emit(message)
      console.log(message)
    })

    //Escuchar el evento Sig1
    this.hubConnection.on("Sig1", (data) => {
      console.log(data)
     this.sign1Emmiter.emit(data)
    })

    //Escuchar el evento Sig2
    this.hubConnection.on("Sig2", (data2) => {
     this.sign2Emmiter.emit(data2)
      console.log(data2)
    })

    let id = sessionStorage.getItem('userId')

    if(sessionStorage.getItem('userId')){
      this.hubConnection.on(id!, (data2) => {
         this.messageRecibed.emit(data2)
        console.log(data2)
      })
    }




  }


  sendMessage(data: any): Observable<any>{
    return this.HTTP.post<any>(`${this.url}/api/Beer`, data)
  }


  abrilCanal(canal:string){
  //   this.hubConnection.on(canal, (data2) => {
  //     // this.sign2Emmiter.emit(data2)
  //     console.log('djfdsf')
  //     console.log(data2)

  //   })
  }


}
