import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ddos-detection',
  templateUrl: './ddos-detection.component.html',
  styleUrls: ['./ddos-detection.component.css']
})

export class DdosDetectionComponent {
  fileInput!: HTMLInputElement; // Add ! to indicate that it will be initialized later

  // Other component code...

  constructor(private http: HttpClient) { }

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
