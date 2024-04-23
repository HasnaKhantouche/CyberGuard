import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const forgotPasswordButton = document.getElementById('forgotPasswordButton') as HTMLButtonElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const showPasswordCheckbox = document.getElementById('showPasswordCheckbox') as HTMLInputElement;

    if (forgotPasswordButton) {
      forgotPasswordButton.addEventListener('click', () => {
        window.location.href = '/password-recovery'; 
      });
    }

    if (showPasswordCheckbox && passwordInput) {
      showPasswordCheckbox.addEventListener('change', () => {
        passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
      });
    }
  }
}


