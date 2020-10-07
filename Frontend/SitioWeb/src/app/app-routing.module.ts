import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuestrasCasasComponent } from './Component/nuestras-casas/nuestras-casas.component';

const routes: Routes = [
{path: 'Nuestras-Casas', component: NuestrasCasasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
