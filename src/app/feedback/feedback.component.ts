import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackMessage: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  goBack(): void {
    window.history.back();
  }

  submitFeedback(): void {
    if (this.feedbackMessage.trim() !== '') {
      this.http.post('http://localhost:5000/submit_feedback', { message: this.feedbackMessage })
        .subscribe((response: any) => {
          // Clear the textarea after successful submission
          this.feedbackMessage = '';
        }, error => {
          console.error('Error submitting feedback:', error);
        });
    }
  }
  

}
