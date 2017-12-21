import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';

import { AppRouteModule } from './routes/route.module';
import { AnimalsModule } from './animals/animals.module';
import { UsersModule } from './users/users.module';
import { CoreModule } from './core/core.module';
import { CommentModule } from './animals/comments/comments.module';

import { AppComponent } from './app.component';
import { Auth } from './users/Auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRouteModule,
    CoreModule,
    UsersModule,
    AnimalsModule,
    CommentModule,
    ToastModule.forRoot()
  ],
  providers: [Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
