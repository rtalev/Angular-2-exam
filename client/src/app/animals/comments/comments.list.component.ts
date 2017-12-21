import {Component, OnInit} from '@angular/core';
import {CommentsModel} from "./Comments";
import {CommentsService} from "./comments.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments.list.component.html'
})

export class CommentsListComponent implements OnInit {
  comments;
  constructor(private commentsService: CommentsService, private route: ActivatedRoute) {}
  ngOnInit() {
    const animalId = this.route.snapshot.paramMap.get('id');
    this.commentsService.getComments(animalId).subscribe(res => {
      this.comments = res.json();
    });
  }
}
