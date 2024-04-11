import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SingnalrService } from 'src/app/core/services/singnalr.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  title = 'singalr';
  chat = new FormControl('')
  chatMessages: any[] = []

  userToSend = new FormControl("")
  user = new FormControl("")

  constructor(private signal: SingnalrService) {

  }
  ngOnInit(): void {
    this.signal.messageRecibed.subscribe(m => {

      this.chatMessages.push({ message: m.mensaje, recibed: true })
    })



    this.user.setValue(sessionStorage.getItem('userId'))

    if (this.user.value == "2") {
      this.userToSend.setValue("1")
    } else {
      this.userToSend.setValue("2")
    }
  }

  sendChat() {
    if (this.chat.value) {
      //  this.signal.abrilCanal(this.userToSend.value)
      this.signal.sendMessage({
        UserEnvia: this.user.value,
        UserRecibe: this.userToSend.value,
        Mensaje: this.chat.value
      }).subscribe(r => { });
      this.chatMessages.push({ message: this.chat.value, recibed: false })
      this.chat.setValue("")



    }
  }

}
