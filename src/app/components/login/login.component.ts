import { LoginService } from './../../core/services/login.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errMsg : any[] = [];

  loginForm : UntypedFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]]
  });

  constructor(private fb : UntypedFormBuilder , private loginSvc: LoginService, private router : Router){

  }
  ngOnInit() {

  }



  onSubmit() {

    if (!this.loginForm.get('username')?.valid) {
      this.errMsg = [];
    } else {
      this.errMsg = [];
      debugger
      this.loginSvc.login({userName:this.loginForm.get('username')?.value}).subscribe(r=>{
        if(r.ok){
          sessionStorage.setItem('user',r.data[0].userName)
          sessionStorage.setItem('userId',r.data[0].id)
          this.router.navigate(['/menu/chat'])
          console.log(this.loginForm.value);
          this.loginForm.reset();
          alert('Login Successfully');
        }

      })

    }
  }
}
