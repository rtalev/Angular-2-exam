import {Component, OnInit} from '@angular/core';
import { AnimalsService } from './animals.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-animals-all',
  templateUrl: './animals.all.component.html',
  styles: [
    `.all-animals-container {width: 60%; margin: 0 auto; text-align: center}`,
    `.animal-box { border-bottom: 1px solid black; padding-bottom: 5px; margin: 5px 0}`
  ]
})

export class AnimalsAllComponent implements OnInit {
  animals: Array<object>;
  page = 1;
  search: string;
  constructor(private animalsService: AnimalsService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.animalsService.getAllAnimals(this.page).subscribe(res => {
      this.animals = res.json();
      this.router.navigateByUrl('/animals/all?page=' + this.page);
    });
  }

  prevPage($event) {
    $event.preventDefault();
    this.page = +this.route.snapshot.queryParamMap.get('page');
    this.page = this.page - 1;
    this.animalsService.getAllAnimals(this.page, this.search).subscribe(res => {
      this.animals = res.json();
      if (this.search) {
        this.router.navigateByUrl('/animals/all?page=' + this.page + '&search=' + this.search);
      } else {
        this.router.navigateByUrl('/animals/all?page=' + this.page);
      }
    });
  }

  nextPage($event) {
    $event.preventDefault();
    this.page = +this.route.snapshot.queryParamMap.get('page') || 1;
    this.page = this.page + 1;
    this.animalsService.getAllAnimals(this.page, this.search).subscribe(res => {
      this.animals = res.json();
      if (this.search) {
        this.router.navigateByUrl('/animals/all?page=' + this.page + '&search=' + this.search);
      } else {
        this.router.navigateByUrl('/animals/all?page=' + this.page);
      }
    });
  }

  onSearch() {
    console.log(this.search);
    this.animalsService.getAllAnimals(this.page, this.search).subscribe(res => {
      this.animals = res.json();
      if (this.search) {
        this.router.navigateByUrl('/animals/all?page=' + this.page + '&search=' + this.search);
      } else {
        this.router.navigateByUrl('/animals/all?page=' + this.page);
      }
    });
  }
}
