import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrlComponent } from './url/url.component';
import { TopFrequentComponent } from './top-frequent/top-frequent.component';

export const routes: Routes = [
	{ path: '',     redirectTo: 'urls', pathMatch: 'full'},
	{ path: 'urls', component: UrlComponent},
	{ path: 'top-frequent', component: TopFrequentComponent},
	{ path: '**',   redirectTo: 'urls', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

