import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { FirestoreService } from './services/firestore.service';
import { AddLibroComponent } from './add-libro/add-libro.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    AddLibroComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    LayoutModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'add-libro',
        component: AddLibroComponent
      },
      {
        path: '',
        component: IndexComponent
      }
    ])
  ],
  providers: [FirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
