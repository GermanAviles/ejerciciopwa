import { Component } from '@angular/core';
import { MessagingService } from './services/messaging.service';
import { NotesService } from './services/notes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-pwa';
  panelOpenState = false;
  notas: Observable<any>;
  constructor( private _notesServices: NotesService , private  _MessagingS: MessagingService ) {
    this.notas = this._notesServices.notas;
    this._notesServices.getNotes();
  }
}


/**
  curl https://fcm.googleapis.com/fcm/send \
-H"Content-Type: application/json" \
	-H"Authorization: key=..." \
-d '{ "notification": { "title": "Nueva Feature!", "body": "Hay nuevas features","icon":"https://url-de-tu-icono", "click_action": "http://www.platzi.com"}, "to" : "..."
}'
*/
