import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '@models';
import { EmployeeService } from 'app/services';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form
      [formGroup]="newEmployeeForm"
      (submit)="submit($event)"
      class="flex flex-col gap-5"
    >
      <input
        type="text"
        placeholder="Name"
        formControlName="name"
        class="{{
          isInvalid('name') && 'focus-visible:outline-red-400 text-red-300'
        }}
          block w-full rounded-md border-gray-300
          shadow-sm focus:border-primary-400 focus:ring
          focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed
          disabled:bg-gray-50 disabled:text-gray-500
          p-2
        "
      />
      <input
        type="text"
        placeholder="Salary"
        formControlName="salary"
        class="{{
          isInvalid('salary') && 'focus-visible:outline-red-400 text-red-300'
        }}
          block w-full rounded-md border-gray-300
          shadow-sm focus:border-primary-400 focus:ring
          focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed
          disabled:bg-gray-50 disabled:text-gray-500
          p-2
        "
      />
      <input
        type="text"
        placeholder="Position"
        formControlName="position"
        class="{{
          isInvalid('position') && 'focus-visible:outline-red-400 text-red-300'
        }}
          block w-full rounded-md border-gray-300
          shadow-sm focus:border-primary-400 focus:ring
          focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed
          disabled:bg-gray-50 disabled:text-gray-500
          p-2
        "
      />
      <input
        type="text"
        placeholder="Departament"
        formControlName="departament"
        class="{{
          isInvalid('departament') &&
            'focus-visible:outline-red-400 text-red-300'
        }}
          block w-full rounded-md border-gray-300
          shadow-sm focus:border-primary-400 focus:ring
          focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed
          disabled:bg-gray-50 disabled:text-gray-500
          p-2
        "
      />
      <button type="submit">Submit</button>
    </form>
  `,
})
export class ExamComponent {
  private formBuilder = inject(FormBuilder);
  private employeeService = inject(EmployeeService);

  newEmployeeForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    salary: [
      0,
      [Validators.required, Validators.max(5000), Validators.min(1000)],
    ],
    position: ['', [Validators.required], Validators.maxLength(50)],
    departament: ['', [Validators.required, Validators.maxLength(50)]],
  });

  isInvalid = (controlName: string) =>
    this.newEmployeeForm.get(controlName)?.invalid &&
    (this.newEmployeeForm.get(controlName)?.touched ||
      this.newEmployeeForm.get(controlName)?.dirty);

  submit = (event: Event) => {
    event.preventDefault();
    if (this.newEmployeeForm.invalid) return;

    const newEmployee: Employee = {
      id: Math.floor(Math.random() * 1000),
      name: this.newEmployeeForm.value.name as string,
      salary: Number(this.newEmployeeForm.value.salary),
      position: this.newEmployeeForm.value.position as string,
      department: this.newEmployeeForm.value.departament as string,
    };

    this.employeeService.addEmployeeStatic(newEmployee);

    this.newEmployeeForm.reset();
  };
}
