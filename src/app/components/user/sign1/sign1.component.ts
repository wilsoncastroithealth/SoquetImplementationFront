import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Sign1Service } from 'src/app/core/services/sign1.service';
import { SingnalrService } from 'src/app/core/services/singnalr.service';

@Component({
  selector: 'app-sign1',
  templateUrl: './sign1.component.html',
  styleUrls: ['./sign1.component.css']
})
export class Sign1Component implements OnInit {

  idEdit: boolean = false;
  idGlobal : number = 0;
  code = new UntypedFormControl('')
  description = new UntypedFormControl('')

  data: any[] = []
  constructor(private sign1: Sign1Service, private conection: SingnalrService) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    let dataLoad = await this.sign1.getInfoSign1().toPromise()
    if (dataLoad) {
      this.data = dataLoad.data.reverse()
    }
    this.conection.sign1Emmiter.subscribe(data => {
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
        this.sign1.create({
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

      this.sign1.update({
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
    this.sign1.delete(id).subscribe(r=>{
      window.alert('eliminado')
    })
  }

}
