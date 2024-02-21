import { Component, inject } from '@angular/core';
import { EmployeeService } from 'app/services';

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [],
  template: `
    <h1>Exercice 9</h1>
    <h2>*ngFor - Classes</h2>
    <b>Employees:</b>
    <table class="table-bordered table-hover">
      <tr>
        <th (click)="sort('name')">Name</th>
        <th (click)="sort('position')">Position</th>
        <th (click)="sort('salary')">Salary</th>
        <th (click)="sort('department')">Departament</th>
      </tr>
      @if (employees) {
        @for (employee of employees; track employee.id) {
          <tr>
            <td>{{ employee.name }}</td>
            <td>{{ employee.position }}</td>
            <td>{{ employee.salary }}</td>
            <td>{{ employee.department }}</td>
          </tr>
        }
      }
    </table>
  `,
})
export class Ex09Component {
  private employeeService = inject(EmployeeService);

  employees = this.employeeService.getEmployeeStatic();

  sort = this.employeeService.sortEmployees;
}
