import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CreateCommentComponent } from './comments.create.component';
import { CommentsListComponent } from './comments.list.component';
import { CommentsModel } from './Comments';

import { CommentsService } from './comments.service';

@NgModule({
  declarations: [CreateCommentComponent, CommentsListComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [CommentsService],
  exports: [CreateCommentComponent, CommentsListComponent]
})

export class CommentModule {}
