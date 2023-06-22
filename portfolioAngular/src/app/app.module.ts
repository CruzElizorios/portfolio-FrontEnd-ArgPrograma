import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { MistrabajosComponent } from './componentes/mistrabajos/mistrabajos.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { MisestudiosComponent } from './componentes/misestudios/misestudios.component';
import { NewEducacionComponent } from './componentes/experiencia/new-educacion.component';
import { EditEducacionComponent } from './componentes/experiencia/edit-educacion.component';
import { HysComponent } from './componentes/hys/hys.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { NewSobreMiComponent } from './componentes/sobre-mi/new-sobre-mi.component';
import { EditSobreMiComponent } from './componentes/sobre-mi/edit-sobre-mi.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { EditBannerComponent } from './componentes/banner/edit-banner.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { SpinnerInterceptor } from './services/spinner.interceptor';
import { NewProyectComponent } from './componentes/proyectos/new-proyect.component';
import { EditProyectComponent } from './componentes/proyectos/edit-proyect.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    BannerComponent,
    SobreMiComponent,
    ExperienciaComponent,
    MistrabajosComponent,
    InicioComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    MisestudiosComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    HysComponent,
    EditSkillComponent,
    NewSkillComponent,
    NewSobreMiComponent,
    EditSobreMiComponent,
    FooterComponent,
    EditBannerComponent,
    ProyectosComponent,
    NewProyectComponent,
    EditProyectComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
