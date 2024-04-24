import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  imageUrl: string | ArrayBuffer | null = null;

  constructor() { }

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

  submitForm() {
    const form = document.querySelector('form') as HTMLFormElement;
    const formData = new FormData(form);

    // Envoi des données au serveur Flask
    fetch('/sign_up', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      // Afficher la réponse du serveur
      alert(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
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
