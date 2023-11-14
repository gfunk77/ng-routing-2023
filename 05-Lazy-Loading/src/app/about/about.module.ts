import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';

const ABOUT_ROUTES: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule.forChild(ABOUT_ROUTES)],
  exports: [AboutComponent],
})
export class AboutModule {}
