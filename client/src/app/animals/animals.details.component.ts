import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "./animals.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ReactionModel} from "./ReactionModel";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-animals-details',
  templateUrl: './animals.details.component.html',
  styles: [`.details-container { width: 60%; margin: 0 auto; text-align: center;}`]
})

export class AnimalsDetailsComponent implements OnInit {
  animal: object;
  reaction = new ReactionModel('')
  constructor(private animalsService: AnimalsService, private route: ActivatedRoute, private router: Router, private toastrManager: ToastsManager) {}
  ngOnInit() {
    const animalId = this.route.snapshot.paramMap.get('id');
    this.animalsService.animalsDetails(animalId).subscribe(res => {
      this.animal = res.json();
    });
  }

  onReactionSubmit() {

    switch (this.reaction.type) {
      case 'like': this.makeReaction(); break;
      case 'love': this.makeReaction(); break;
      case 'haha': this.makeReaction(); break;
      case 'wow': this.makeReaction(); break;
      case 'sad': this.makeReaction(); break;
      case 'angry': this.makeReaction(); break;
      default: this.toastrManager.warning('Reactions allowed: "like", "love", "haha", "wow", "sad", "angry"', 'Disallowed reaction!');
      break;
    }

  }

  makeReaction() {
    const animalId = this.route.snapshot.paramMap.get('id');
    this.animalsService.addReaction(this.reaction, animalId).subscribe(res => {
      if (!res.json().success) {
        return this.toastrManager.info('You can not react twice with the same reaction!');
      }
      this.animalsService.animalsDetails(animalId).subscribe(animalResponst => {
        this.animal = animalResponst.json();
        this.toastrManager.success('Reaction is added', 'Success');
      });
    });
  }

}
