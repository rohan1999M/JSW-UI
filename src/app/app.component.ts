import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageBoxComponent } from './Components/message-box/message-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JSW-Angualr';

    constructor(public dialog: MatDialog) {}
    
}
