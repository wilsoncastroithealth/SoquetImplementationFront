import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  sidebarActive = false;
  idUser : string | null = null;

  constructor() {
    this.idUser =  sessionStorage.getItem('idUser')
    if(this.idUser == null){

    }
  }

  ngOnInit(): void {
  }

}
