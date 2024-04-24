import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vue-analyst',
  templateUrl: './vue-analyst.component.html',
  styleUrls: ['./vue-analyst.component.css']
})
export class VueAnalystComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const ddosElement = document.getElementById('ddos');
    const phishElement = document.getElementById('phish');
    const bruteElement = document.getElementById('brute');
    const sqlElement = document.getElementById('sql');
    const malwareElement = document.getElementById('malware');
    if (ddosElement) {
      ddosElement.addEventListener('click', () => {
        window.location.href = '/ddos'; 
      });
    }
    if (phishElement) {
      phishElement.addEventListener('click', () => {
        window.location.href = '/phishing'; 
      });
    }
    if (bruteElement) {
      bruteElement.addEventListener('click', () => {
        window.location.href = '/bruteforce'; 
      });
    }
    if (sqlElement) {
      sqlElement.addEventListener('click', () => {
        window.location.href = '/sql'; 
      });
    }
    if (malwareElement) {
      malwareElement.addEventListener('click', () => {
        window.location.href = '/malware'; 
      });
    }
  }
}
