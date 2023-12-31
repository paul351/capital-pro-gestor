import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SolicitudesListaComponent } from './pages/solicitudes/solicitudes-lista/solicitudes-lista.component';
import { SolicitudesModalComponent } from './pages/solicitudes/solicitudes-modal/solicitudes-modal.component';
import { IndicadoresListaComponent } from './pages/indicadores/indicadores-lista/indicadores-lista.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudesListaComponent,
    SolicitudesModalComponent,
    IndicadoresListaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
