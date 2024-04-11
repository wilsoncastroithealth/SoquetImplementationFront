import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Sign1Service } from 'src/app/core/sign1.service';
import { Sign2Service } from 'src/app/core/sign2.service';
import { SingnalrService } from 'src/app/core/singnalr.service';

@Component({
  selector: 'app-sign2',
  templateUrl: './sign2.component.html',
  styleUrls: ['./sign2.component.css']
})
export class Sign2Component implements OnInit {


  idEdit: boolean = false;
  idGlobal : number = 0;
  code = new FormControl('')
  description = new FormControl('')

  data: any[] = []
  constructor(private sign2: Sign2Service, private conection: SingnalrService) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    let dataLoad = await this.sign2.getInfoSign1().toPromise()
    if (dataLoad) {
      this.data = dataLoad.data.reverse()
    }
    this.conection.sign2Emmiter.subscribe(data => {
      this.data = data.data.reverse()
    })

  }
  edit(id: any) {

    let item = this.data.find(e => e.id == id);
    if (item) {
      this.code.setValue(item.code)
      this.description.setValue(item.description)
      this.idGlobal = id
      this.idEdit = true;
    }

  }

  enviar() {
    if (!this.idEdit) {
      if (this.code.value && this.description.value) {
        this.sign2.create({
          code: this.code.value,
          description: this.description.value
        }).subscribe(e => {
          !this.idEdit ? window.alert('Creado') : window.alert('editado');
          this.code.setValue('')
          this.description.setValue('')
          this.idEdit = false;
          this.idGlobal = 0
        })
      }
    } else {

      this.sign2.update({
        id: this.idGlobal,
        code: this.code.value,
        description: this.description.value
      }).subscribe(e => {
        !this.idEdit ? window.alert('Creado') : window.alert('editado');
        this.code.setValue('')
        this.description.setValue('')
        this.idEdit = false;
        this.idGlobal = 0
      })
    }
  }

  delete(id: any){
    this.sign2.delete(id).subscribe(r=>{
      window.alert('eliminado')
    })
  }
}
