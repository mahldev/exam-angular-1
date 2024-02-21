import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Employee, EmployeesResponse } from '@models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private http = inject(HttpClient);
  private url = 'assets/db.json';

  employees: Employee[] = [
    {
      id: 1,
      name: 'John Smith',
      salary: 50000,
      position: 'Senior Developer',
      department: 'Technology',
    },
    {
      id: 2,
      name: 'Emily Johnson',
      salary: 60000,
      position: 'Sales Manager',
      department: 'Sales',
    },
    {
      id: 3,
      name: 'Michael Brown',
      salary: 45000,
      position: 'Data Analyst',
      department: 'Technology',
    },
    {
      id: 4,
      name: 'Jessica Davis',
      salary: 55000,
      position: 'Graphic Designer',
      department: 'Marketing',
    },
  ];

  getEmployeeStatic = () => this.employees;

  sortEmployees = (criteria: keyof Employee) =>
    this.employees.sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });

  getEmployees = () =>
    this.http.get<EmployeesResponse>(this.url).pipe(map((res) => res.data));

  addEmployeeStatic = (employee: Employee) => this.employees.push(employee);
}
