import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private http: HttpClient) { }


  login(): void {
    const formData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:5000/login', formData)
      .subscribe((response: any) => {
        console.log('Login successful:', response);

        this.email = '';
        this.password = '';

        if (response.role === 'admin') {
          window.location.href = '/vue-admin';
        } else if (response.role === 'analyst') {
          window.location.href = '/vue-analyst';
        }
      }, error => {
        console.error('Error logging in:', error);
        this.email = '';
        this.password = '';
        this.errorMessage = 'Invalid email or password. Please try again.';
      });
  }




  ngOnInit(): void {
    const forgotPasswordButton = document.getElementById('forgotPasswordButton') as HTMLButtonElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const showPasswordCheckbox = document.getElementById('showPasswordCheckbox') as HTMLInputElement;

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

    const alreadyElement = document.getElementById('already');
    const signInElement = document.querySelector('.signin');

    if (alreadyElement && signInElement) {
      alreadyElement.addEventListener('click', () => {
        window.location.href = '/signup'; 
      });

      signInElement.addEventListener('click', () => {
        window.location.href = '/signup'; 
      });

      alreadyElement.addEventListener('mouseover', () => {
        alreadyElement.style.textDecoration = 'underline';
        alreadyElement.style.color = 'aquamarine'; // Change the color as needed
      });

      alreadyElement.addEventListener('mouseout', () => {
        alreadyElement.style.textDecoration = 'none';
        alreadyElement.style.color = 'blanchedalmond';
      });

    }
  }
}


