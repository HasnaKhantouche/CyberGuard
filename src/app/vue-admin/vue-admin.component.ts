import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vue-admin',
  templateUrl: './vue-admin.component.html',
  styleUrls: ['./vue-admin.component.css']
})
export class VueAdminComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const manageElement = document.getElementById('manage');
    const backupElement = document.getElementById('backup');
    const configureElement = document.getElementById('configure');
    const updateElement = document.getElementById('update');
    const securityElement = document.getElementById('security');
    if (manageElement) {
      manageElement.addEventListener('click', () => {
        window.location.href = '/user-management'; 
      });
    }
    if (backupElement) {
      backupElement.addEventListener('click', () => {
        window.location.href = '/backup'; 
      });
    }
    if (configureElement) {
      configureElement.addEventListener('click', () => {
        window.location.href = '/configure'; 
      });
    }
    if (updateElement) {
      updateElement.addEventListener('click', () => {
        window.location.href = '/update'; 
      });
    }
    if (securityElement) {
      securityElement.addEventListener('click', () => {
        window.location.href = '/security'; 
      });
    }
  }
}
