import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatInputModule, MatTooltipModule , MatFormFieldModule , MatCardModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LoginComponent } from './login/login.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { FirestoreService } from './services/firestore.service';
import { AddLibroComponent } from './add-libro/add-libro.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
  {path: 'app-index', component: IndexComponent},
  {path: 'add-libro', component: AddLibroComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MyNavComponent,
    LoginComponent,
    AddLibroComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatInputModule,
    MatTooltipModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [FirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
