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
    const btnElement = document.getElementById('btn');

    if (btnElement) {
      btnElement.addEventListener('click', () => {
        window.location.href = '/vue-analyst'; 
      });
    }

    if (forgotPasswordButton) {
      forgotPasswordButton.addEventListener('click', () => {
        window.location.href = '/password-recovery'; 
      });
      forgotPasswordButton.addEventListener('mouseover', () => {
        forgotPasswordButton.style.textDecoration = 'underline';
        forgotPasswordButton.style.color = 'aquamarine'; // Change the color as needed
      });

      forgotPasswordButton.addEventListener('mouseout', () => {
        forgotPasswordButton.style.textDecoration = 'none';
        forgotPasswordButton.style.color = 'blanchedalmond';
      });
    }

    if (showPasswordCheckbox && passwordInput) {
      showPasswordCheckbox.addEventListener('change', () => {
        passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
      });
    }
  }
}


