import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent {
  email: string = '';

  constructor(private http: HttpClient) {}

  password_recovery() {
    this.http.post<any>('http://localhost:5000/password-recovery', { email: this.email })
      .subscribe(
        response => {
          if (response.message) {
            alert(`${response.message}`);
            console.log(response.message);
          } else {
            alert('Email not found');
          }
        },
        error => {
          console.error('Error:', error);
          alert('An error occurred');
        }
      );
  }
  
  


  goBack(): void {
    window.history.back();
  }
}
