import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/servcies/auth.service';


@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  loginForm?: any;

  constructor(private fb: FormBuilder,
     private authService : AuthService,
     private router: Router,
    private toastr:ToastrService
    ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

       // Call the authentication service's login method
       if (this.authService.login(username, password)) {
        // Navigate to the ProductListComponent upon successful login
        this.router.navigate(['/dashboard']);
      } else {
        // Handle authentication error (show error message, etc.)
        this.toastr.error("lpass 8lat","error",{
          onActivateTick:true
        })
      }

    } 
  }

  
  }
