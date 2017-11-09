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

const appRoutes: Routes = [
  { path: 'snippet', component: SnippetComponent },
  { path: 'fe', component: FECompoment },
  { path: 'register', component: RegisterCompoment },
  { path: 'register-form', component: RegisterdataFormComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: '*', component: AppComponent }

];
@NgModule({
  imports: [
    BrowserModule,
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
    FECompoment,
    PageNotFoundComponent,
    RegisterdataFormComponent,
    SnippetComponent,
    RegisterCompoment
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
