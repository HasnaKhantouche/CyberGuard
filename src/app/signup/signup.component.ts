import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  imageUrl: string | ArrayBuffer | null = null;
  passwordsMatch: boolean | null = null;

  username: string = '';
  email: string = '';
  password: string = '';
  Cpassword: string = '';
  role: string = '';

  constructor(private http: HttpClient) {}


  signup(): void {
    let roleElement = document.querySelector('input[name="role"]:checked') as HTMLInputElement;
    let role = roleElement ? roleElement.value : '';
    console.log('Role:', role); // Check the role value in the console

    const formData = {
      username: this.username,
      email: this.email,
      password: this.password,
      role: role
    };
    console.log('data :', formData);
    
    this.http.post('http://localhost:5000/submit_signup', formData)
      .subscribe((response: any) => {
        // Handle response
        console.log('Signup form submitted successfully:', response);
        // Clear form fields after successful submission
        this.username = '';
        this.email = '';
        this.password = '';
        this.Cpassword = '';

        console.log('Signup cleared');
        // No need to clear the role, as it's selected only once
      }, error => {
        console.error('Error submitting signup form:', error);
      });
  }
  


  togglePasswordVisibility(inputId: string) {
    const input = document.getElementById(inputId) as HTMLInputElement;
    const span = document.querySelector(`#${inputId} ~ span`); // Get the span element next to the input
    if (input.type === 'password') {
      input.type = 'text';
      if (span) {
        span.textContent = 'Hide';
      }
  
    } else {
      input.type = 'password';
      if (span) {
        span.textContent = 'Show';
      }
  
    }
  }


  checkPasswordMatch(): void {
    this.passwordsMatch = this.password === this.Cpassword;
}


  previewImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (e: any) => {
      const cameraImg = document.querySelector('.camera img') as HTMLImageElement;
    if (cameraImg) {
      cameraImg.style.display = 'none'; // Hide the camera icon
    }

      const cameraDiv = document.querySelector('.camera') as HTMLDivElement;
      if (cameraDiv) {
        cameraDiv.style.backgroundImage = `url(${e.target.result})`;
        cameraDiv.style.backgroundSize = 'cover';
        cameraDiv.style.backgroundPosition = 'center';
      }
    };
  
    reader.readAsDataURL(file);
  }
  

  
  ngOnInit(): void {
    const alreadyElement = document.getElementById('already');
    const signInElement = document.querySelector('.signin');

    if (alreadyElement && signInElement) {
      alreadyElement.addEventListener('click', () => {
        window.location.href = '/login'; 
      });

      signInElement.addEventListener('click', () => {
        window.location.href = '/login'; 
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

  goBack(): void {
    window.history.back();
  }

}
