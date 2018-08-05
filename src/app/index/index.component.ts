import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FirestoreService } from '../services/firestore.service';
import { Item,Libro,Aula } from '../models/firebase';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  items: Item[];
  libros: Libro[];
  aulas: Aula[];

  message = new FormControl('Info about the action');
  constructor(private firebaseService: FirestoreService) { 
  }
  ngOnInit() {
    this.firebaseService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    })
    this.firebaseService.getLibros().subscribe(libros => {
      
      this.libros = libros;
    })
    this.firebaseService.getAula().subscribe(aulas =>{
      this.aulas = aulas;
    })
  }

}
