import { Injectable } from '@angular/core';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private itemsCollection: AngularFirestoreCollection<any>;
  private itemsDocument: AngularFirestoreDocument;
  public notas: Observable<any[]>;

  constructor( private afs: AngularFirestore) { }

  getNotes() {
    // accedemos a la coleccion 'notas'
    this.itemsCollection = this.afs.collection<any>('notas');
    this.notas = this.itemsCollection.valueChanges();
  }

  getNote( id ) {
    // accedemos al documento que desea el usuario
    this.itemsDocument =  this.afs.collection<any>('notas').doc( id );
    // regresamos el documento obtenido
    return this.itemsDocument.get();
  }

  addNote( nota ) {
    // accedemos a la colección
    this.itemsCollection =  this.afs.collection<any>('notas');
    // si la nota tiene un id la guardamos
    if ( nota.id ) {
      this.itemsCollection.doc( nota.id ).set( nota );
    }

  }

  deleteNote( id ) {
    this.afs.collection<any>('notas').doc( id ).delete().then(function() {
            console.log('Documento borrado exitosamente');
        }).catch(function(error) {
            console.error('Error al borrar el documento: ', error);
          });

  }
}
