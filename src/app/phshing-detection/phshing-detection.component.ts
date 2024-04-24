import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-phshing-detection',
  templateUrl: './phshing-detection.component.html',
  styleUrls: ['./phshing-detection.component.css']
})
export class PhshingDetectionComponent implements OnInit{
  fileInput!: HTMLInputElement; 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const analyzeElement = document.getElementById('analyzeButton');

    if (analyzeElement) {
      analyzeElement.addEventListener('click', () => {
        window.location.href = '/alert-phishing'; 
      });
    }
  }


  onFileSelected(event: any) {
    this.fileInput = event.target; // Assign the file input element to fileInput property
    const file: File | null = this.fileInput.files?.[0] || null;
    if (file) {
      this.uploadFile(file);
    }
  }

  uploadFile(file: File): void {
    const formData = new FormData();
    formData.append('file', file);
  
    this.http.post('http://localhost:5000/upload', formData)
      .subscribe((response: any) => {
        if (response.ok) {
          // File uploaded successfully, trigger the analyze process
          this.analyzeFile();
        } else {
          // Handle the error
          console.error('Failed to upload file');
        }
      }, error => {
        console.error('Error:', error);
      });
  }
  

  analyzeFile(): void {
    const formData = new FormData();
    if (this.fileInput && this.fileInput.files && this.fileInput.files.length > 0) {
      formData.append('file', this.fileInput.files[0]);

      fetch('/analyze', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            console.log('Analysis result:', data);
            // Handle the analysis result here
          });
        } else {
          console.error('Failed to analyze file');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    } else {
      console.error('No file selected');
    }
  }
}

