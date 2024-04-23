import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      const addUserBtn = document.getElementById('addUserBtn');
      const tableBody = document.querySelector('#userTable tbody');
  
      addUserBtn?.addEventListener('click', function() {
        const firstRow = tableBody?.querySelector('tr');
        if (firstRow) {
          const newRow = firstRow.cloneNode(true) as HTMLTableRowElement;
          newRow.classList.add('new-row');
          newRow.innerHTML = `
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td class="actions">
              <img src="../assets/edit.png" alt="Edit" class="edit-icon">
              <img src="../assets/remove.png" alt="Remove" class="remove-icon">
            </td>
          `;
          tableBody?.appendChild(newRow);
  
          // Set the size of the icons in the new row
          newRow.querySelectorAll('.actions img').forEach(icon => {
            (icon as HTMLImageElement).style.width = '50px';
            (icon as HTMLImageElement).style.height = '50px';
            (icon as HTMLImageElement).style.marginLeft = '30px';
          });
          const actions = newRow.querySelector('.actions') as HTMLElement;
    actions.style.display = 'flex';
    actions.style.alignItems = 'center';
    actions.style.width = '200px';
        }
      });
  
      tableBody?.addEventListener('click', function(event) {
        const target = event.target as HTMLElement;
        if (target.classList.contains('remove-icon')) {
          target.closest('tr')?.remove();
        } else if (target.classList.contains('edit-icon')) {
          const row = target.closest('tr');
          const cells = row?.querySelectorAll('td');
          cells?.forEach(cell => {
            (cell as HTMLElement).contentEditable = 'true';
          });
        }
      });
    });
  }
  
  
}
