import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  submitForm(): void {
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http.post('http://localhost:5000/submit_contact', formData)
      .subscribe((response: any) => {
        // Handle response
        console.log('Contact form submitted successfully:', response);
        // Clear form fields after successful submission
        this.name = '';
        this.email = '';
        this.message = '';
      }, error => {
        console.error('Error submitting contact form:', error);
      });
  }
}
