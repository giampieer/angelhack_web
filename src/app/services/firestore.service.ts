import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

import { Item ,Libro, Aula } from '../models/firebase';

import { Observable } from "rxjs/Rx";




@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  itemsCollection: AngularFirestoreCollection<Item>;
  librosCollection: AngularFirestoreCollection<Libro>;
  aulasCollection: AngularFirestoreCollection<Aula>;

  items: Observable<Item[]>;
  libros: Observable<Libro[]>;
  aulas: Observable<Aula[]>;

  constructor(public afs: AngularFirestore) {
 
    this.items = this.afs.collection('profesor').valueChanges();
    this.libros = this.afs.collection('libros').valueChanges();
    this.aulas = this.afs.collection('aula').valueChanges();

    this.libros = this.afs.collection('aula').snapshotChanges().map(changes => {
      return changes.map(a =>{
        const data = a.payload.doc.data() as Aula;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }
  getItems(){
    return this.items;
  }
  getLibros(){
    return this.libros;
  }
  getAula(){
    return this.aulas;
  }
}
