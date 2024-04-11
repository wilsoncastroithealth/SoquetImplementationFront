import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SingnalrService } from 'src/app/core/singnalr.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  title = 'singalr';
  chat = new FormControl('')
  chatMessages: any[] = []

  constructor(private signal: SingnalrService) {

  }
  ngOnInit(): void {
    this.signal.messageNotification.subscribe(e => {
      if (e) {

        this.chatMessages.push({ message: e, recibed: true })
      }

    })

  }

  sendChat() {
    if (this.chat.value) {
      this.chatMessages.push({ message: this.chat.value, recibed: false })
      this.chat.setValue("")
    }
  }

}
