import { Component, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'capital-pro-gestor';
  selector = signal('');

  ngOnInit(): void {
    this.setSelector('solicitudes')
  }

  setSelector(link: string) {
    this.selector.set(link);
  }
}
