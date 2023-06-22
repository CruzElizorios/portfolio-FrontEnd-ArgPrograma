import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(private formBuilder:FormBuilder){}
  toastLiveExample = document.getElementById('liveToast');

  formulario: FormGroup = this.formBuilder.group({
    name_emailjs: '',
    email_emailjs: '',
    message_emailjs: '',
  })
  
  async enviarCorreo(e: Event) {
    e.preventDefault();
    emailjs.init('yw1WgwK0DFxXhFfjn')
    let response = await emailjs.send("service_t5c4eni","template_qr0t5ms",{
      name_emailjs: this.formulario.value.name_emailjs,
      email_emailjs: this.formulario.value.email_emailjs,
      message_emailjs: this.formulario.value.message_emailjs,
      });
      this.formulario.reset();
      this.mostrarAlerta();
  }

  claseAlerta = 'mensajeAlerta vacio';
  mostrarAlerta(){
      if (this.claseAlerta === 'mensajeAlerta vacio') {
        this.claseAlerta = 'mensajeAlerta'
      }
}
}
