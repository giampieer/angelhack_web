import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

import { Item ,Libro, Aula } from '../models/firebase';

import { Observable } from "rxjs/Rx";
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  itemsCollection: AngularFirestoreCollection<Item>;
  librosCollection: AngularFirestoreCollection<Libro>;
  aulasCollection: AngularFirestoreCollection<Aula>;

  itemDoc: AngularFirestoreDocument<Item>;

  items: Observable<Item[]>;
  libros: Observable<Libro[]>;
  aulas: Observable<Aula[]>;

  constructor(public afs: AngularFirestore) {
 
    this.librosCollection = this.afs.collection('libros');

    this.items = this.afs.collection('profesor').valueChanges();
    this.libros = this.afs.collection('libros').valueChanges();
    this.aulas = this.afs.collection('aula').valueChanges();


   // this.libros = this.librosCollection.snapshotChanges().map(changes => {
   //   return changes.map(a =>{
   //     const data = a.payload.doc.data() as Libro;
   //     data.id = a.payload.doc.id;
   //     return data;
   //   });
   // });


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
  addLibros(libro : Libro){
    this.librosCollection.add(libro);
  }
  
}
