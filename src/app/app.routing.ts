import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudesListaComponent } from './pages/solicitudes/solicitudes-lista/solicitudes-lista.component';
import { IndicadoresListaComponent } from './pages/indicadores/indicadores-lista/indicadores-lista.component';

const routes: Routes = [
  { path: '', redirectTo: 'solicitudes', pathMatch: 'full'},
  { path: 'solicitudes', component: SolicitudesListaComponent},
  { path: 'indicadores', component: IndicadoresListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
