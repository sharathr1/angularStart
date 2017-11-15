import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SnippetComponent } from './snippet/snippet.component';
import { FECompoment } from './fe/fe.component';
import { RegisterCompoment } from './register/register.component';
import { RegisterdataFormComponent } from './register/useregisterFormComponent';
import { FormGroup, FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './error/error.component';
import { VoterComponent } from './voter/voter.component';
import { VoteTakerComponent } from './voter/votetaker.component';
import { ChartModule } from 'angular2-highcharts';
import { ChartComponentApp } from './charts/charts.component';

const appRoutes: Routes = [
  { path: 'snippet', component: SnippetComponent },
  { path: 'fe', component: FECompoment },
  { path: 'register', component: RegisterCompoment },
  { path: 'register-form', component: RegisterdataFormComponent },
  { path: 'votetaker', component: VoteTakerComponent },
  { path: 'simple-chart-example', component: ChartComponentApp },
  { path: '**', component: PageNotFoundComponent },
  { path: '*', component: AppComponent }

];
 declare var require: any;

export function highchartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  dd(hc);

  return hc;
} 
@NgModule({
  imports: [
    BrowserModule,
    ChartModule.forRoot(require('highcharts')),
    ChartModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    VoterComponent,
    VoteTakerComponent,
    FECompoment,
    PageNotFoundComponent,
    RegisterdataFormComponent,
    SnippetComponent,
/*    ChartComponentApp,
*/    RegisterCompoment],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
