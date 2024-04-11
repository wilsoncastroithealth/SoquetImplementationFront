import { Injectable, EventEmitter } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class SingnalrService {

  url = 'https://ismaelruge.bsite.net'
  // url = 'https://localhost:7100'
  private hubConnection: signalR.HubConnection;

  messageNotification: EventEmitter<string> = new EventEmitter<string>();
  sign1Emmiter: EventEmitter<any> = new EventEmitter<any>();
  sign2Emmiter: EventEmitter<any> = new EventEmitter<string>();

  constructor() {

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
  }



}
