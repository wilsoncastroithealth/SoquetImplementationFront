import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatService } from 'src/app/core/services/chat/chat.service';
import { SingnalrService } from 'src/app/core/services/singnalr.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  title = 'singalr';
  chat = new FormControl('')
  chatMessages: any[] = []
  listUsers: any[] = []
  userId: any;
  curentUser = { userName: "", id: 0 }
  curentUserChat = { userName: "", id: 0 }
  currentChatId: number = 0;
  userToSend = new FormControl("")
  user = new FormControl("")

  chatinitiated = false;

  @ViewChild('mensajesContainer') mensajesContainer!: ElementRef;
  enviarAudio: HTMLAudioElement = new Audio()
  recibirAudio: HTMLAudioElement = new Audio()


  constructor(private signal: SingnalrService, private UserSVC: UsersService, private chatSVC: ChatService) {
    this.userId == sessionStorage.getItem('userId')
    this.enviarAudio.src  = '../../../../assets/sound/enviado.mp3'
    this.recibirAudio.src  = '../../../../assets/sound/recibido.mp3'


  }


  ngOnInit(): void {

    this.signal.messageRecibed.subscribe(m => {
      // let obj = { message: m.data[0].mensaje, recibed: true }
      // m.data[0].userEnvia == sessionStorage.getItem('userId') ? obj.recibed = false : obj.recibed = true
      // this.chatMessages.push(obj)
      this.distMessages(m.data,true)
      this.scrollDownChat()

    })



    this.user.setValue(sessionStorage.getItem('userId'))

    if (this.user.value == "2") {
      this.userToSend.setValue("1")
    } else {
      this.userToSend.setValue("2")
    }

    this.getUsers()
  }

  getUsers() {
    let userId = sessionStorage.getItem('userId')
    this.UserSVC.getUser().subscribe(r => {
      this.listUsers = r.data;
      this.curentUser = this.listUsers.find(e => e.id == userId)
      this.listUsers = this.listUsers.filter(e => e.id != userId)
    })
  }

  sendChat() {
    if (this.chat.value) {
      //  this.signal.abrilCanal(this.userToSend.value)
      this.chatSVC.saveMessage({
        UserEnvia: sessionStorage.getItem('userId'),
        UserRecibe: this.currentChatId,
        Mensaje: this.chat.value,
        Leido: false,

      }).subscribe(r => { });
      //  this.chatMessages.push({ message: this.chat.value, recibed: false })
      this.chat.setValue("")



    }
  }

  initChat(idUser: number) {

    this.chatMessages = [];
    this.currentChatId = idUser;
    let obj = {
      UserEnvia: sessionStorage.getItem('userId'),
      UserRecibe: idUser
    }
    this.chatSVC.ConsultChatAll(obj).subscribe(r => {
      this.distMessages(r.data,false)
      this.chatinitiated = true;
      this.curentUserChat = this.listUsers.find(e => e.id == idUser)
      this.scrollDownChat()


    })
  }

  distMessages(chats: any[], sound : boolean) {
    chats = chats.reverse()
    for (const m of chats) {
      let obj = { message: m.mensaje, recibed: false }
      m.userEnvia == sessionStorage.getItem('userId') ? obj.recibed = false : obj.recibed = true
      this.chatMessages.push(obj)
      if(obj.recibed == false && sound){
        this.enviarAudio.play()
      }else{
        if(sound){
          this.recibirAudio.play()
        }
      }
    }
  }

  scrollDownChat() {
    setTimeout(() => {
      this.mensajesContainer.nativeElement.scrollTop = this.mensajesContainer.nativeElement.scrollHeight;
    }, 100);
  }



}
