import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewSobreMiComponent } from './componentes/sobre-mi/new-sobre-mi.component';
import { EditSobreMiComponent } from './componentes/sobre-mi/edit-sobre-mi.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/experiencia/new-educacion.component';
import { EditEducacionComponent } from './componentes/experiencia/edit-educacion.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevainfo', component: NewSobreMiComponent},
  {path:'editarinfo/:id', component: EditSobreMiComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editarexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editaredu/:id', component: EditEducacionComponent},
  {path:'newskill', component: NewSkillComponent},
  {path:'editarhys/:id', component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
