import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AnimalsCreateComponent } from './animals.create.component';
import { AnimalsAllComponent } from './animals.all.component';
import { AnimalsDetailsComponent } from './animals.details.component';

import { CommentModule } from './comments/comments.module';

import { AnimalsService } from './animals.service';

@NgModule({
  declarations: [AnimalsCreateComponent, AnimalsAllComponent, AnimalsDetailsComponent],
  imports: [CommonModule, FormsModule, RouterModule, CommentModule],
  providers: [AnimalsService],
  exports: []
})

export class AnimalsModule {}
