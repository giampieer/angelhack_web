import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Libro } from '../models/firebase';


@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {
  libros: Libro = {
    titulo:'',
    autor: '',
    imagen: '',
    porcentaje: ''
  }
  constructor(private firebaseService: FirestoreService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.libros.autor != '' && this.libros.titulo != '' && this.libros.imagen){
      this.firebaseService.addLibros(this.libros);
      this.libros.titulo = '';
      this.libros.autor = '';
      this.libros.imagen = '';
    
    }
  }
}
