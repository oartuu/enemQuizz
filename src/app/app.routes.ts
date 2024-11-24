import { Routes } from '@angular/router';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { PerguntasComponent } from './perguntas/perguntas.component';


export const routes: Routes = [
  
  {
    path: '',
    component: NavegacaoComponent
  },
  {
    path: 'perguntas',
    component: PerguntasComponent
  }
];
