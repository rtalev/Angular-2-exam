import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewContainerRef } from '@angular/core';

import { PrivateRouteService } from './private-route.service';

import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule],
  providers: [PrivateRouteService],
  exports: [NavbarComponent]
})

export class CoreModule {}
