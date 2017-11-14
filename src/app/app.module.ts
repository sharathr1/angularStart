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

/*import { FileUploadComponent } from './file-upload/file-upload.component';
import { ChartComponentApp } from './charts/charts.component';
*/
declare var require: any;

export function highchartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  dd(hc);

  return hc;
}
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
@NgModule({
  imports: [
    BrowserModule,
    ChartModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ChartModule.forRoot(require('highcharts'))
  ],
  declarations: [
    AppComponent,
    VoterComponent,
    VoteTakerComponent,
    FECompoment,
    PageNotFoundComponent,
    RegisterdataFormComponent,
    SnippetComponent,
    ChartComponentApp,
    RegisterCompoment],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
