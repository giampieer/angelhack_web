import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FirestoreService } from '../services/firestore.service';
import { Item } from '../models/firebase';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  items: Item[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver,private firebaseService: FirestoreService) {}
  

  ngOnInit(){
    this.firebaseService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    })
  }
  }
