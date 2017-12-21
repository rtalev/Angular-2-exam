import { Component } from '@angular/core';
import { AddAnimalModel } from './Animal';
import { AnimalsService } from './animals.service';
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animals-create',
  templateUrl: './animals.create.component.html',
  styles: [`.animal-form {
    width: 50%;
    margin: 60px auto;
  }

  .animal-form > * {
    display: block;
    margin: 10px auto;
    text-align: center;
    padding: 3px 0;
    box-sizing: border-box;
  }`]
})

export class AnimalsCreateComponent {
  animal = new AddAnimalModel('', 0, '', '', 0, '', '');
  errorMessage;
  constructor(private animalsService: AnimalsService, private router: Router, private toastrManager: ToastsManager) {}
  onSubmit() {
    if (this.animal.name.length < 3) {
      this.toastrManager.warning('Name must be at least 3 symbols');
    } else if (this.animal.age < 0 || this.animal.age > 100) {
      this.toastrManager.warning('Age must be between 0 and 100');
    } else if (this.animal.color.length < 3) {
      this.toastrManager.warning('Color must be at least 3 symbols');
    } else if (this.animal.price < 0 || this.animal.price === 0) {
      this.toastrManager.warning('Price must be a positive number!');
    } else {
      this.animalsService.createAnimal(this.animal).subscribe(res => {
        if (!res.json().success) {
          if (res.json().errors) {
            this.errorMessage = res.json().errors[Object.keys(res.json().errors)[0]];
            this.toastrManager.warning(this.errorMessage);
          } else {
            this.errorMessage = res.json().message;
            this.toastrManager.warning(this.errorMessage);
          }
        } else {
          this.router.navigateByUrl('/animals/all').then(res2 => this.toastrManager.success('Animal added successfully!'));
        }
      });
    }

  }
}
