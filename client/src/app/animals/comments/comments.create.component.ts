import { Component } from '@angular/core';
import {CommentsService} from "./comments.service";
import { CommentsModel } from './Comments';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-component-create',
  templateUrl: './comments.create.component.html',
  styles: [`.comment-form { width: 50%; margin: 0 auto}`,
      `.comment-form > * { display: block}`]
})

export class CreateCommentComponent {
  comment = new CommentsModel('');
  animalId: string;
  constructor(private commentsService: CommentsService, private route: ActivatedRoute, private toastrManager: ToastsManager, private router: Router) {
    this.animalId = this.route.snapshot.paramMap.get('id');
  }

  onSubmit() {
    this.commentsService.addComment(this.comment, this.animalId).subscribe(res => {
      const message = res.json().message;
      if (!res.json().success) {
        return this.toastrManager.warning(message);
      }
      this.router.navigateByUrl('/animals/details/' + this.animalId).then(r => this.toastrManager.success('Comment added successfully!'));
    });
  }
}
