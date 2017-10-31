import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SnippetComponent } from './snippet/snippet.component';
import { FECompoment } from './fe/fe.component';

const appRoutes: Routes = [
  { path: 'snippet', component: SnippetComponent },
  { path: 'fe', component: FECompoment }

];
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    FECompoment,
    SnippetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
