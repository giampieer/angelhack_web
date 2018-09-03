import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Libro } from '../models/firebase';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  libro: Libro={
    titulo: '',
    porcentaje: '',
    imagen: '',
    autor: '',
    fecha: ''
  }
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
  }
  onGuardarLibro(myForm: NgForm){
    if(myForm.valid == true){
      const fechaNow = Date.now();
      this.libro.fecha = fechaNow;
      this.firestoreService.addLibros(this.libro);
      myForm.resetForm();
    }else{
      console.log('algo va mal');
      window.alert('termine de ingresar los datos')
    }
  }
}
