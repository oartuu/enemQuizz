import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNavegacaoComponent } from '../form-navegacao/form-navegacao.component';
import { LocalStorageService } from '../_services/local-storage.service';

interface Pergunta {
  enunciado: string;
  alternativas: { [key: string]: string };
  respostaCorreta: string;
}
@Component({
  selector: 'app-perguntas',
  standalone: true,
  imports: [CommonModule, FormNavegacaoComponent],
  templateUrl: './perguntas.component.html',
  styleUrl: './perguntas.component.css',
})
export class PerguntasComponent implements OnInit {
  perguntas = [
    {
      questao: 'questao1',
      enunciado:
        'Qual evento é considerado o marco inicial da Segunda Guerra Mundial?',
      alternativas: {
        a: 'O ataque a Pearl Harbor.',
        b: 'A invasão da Polônia pela Alemanha.',
        c: 'A declaração de guerra da Inglaterra à Alemanha.',
        d: 'A explosão da bomba atômica em Hiroshima.',
      },
      alternativaCorreta: 'b',
    },
  ];

  dadosLocalStorage: any;
  questoes: any;
  constructor(private localStorageService: LocalStorageService) {}

  async ngOnInit() {
    this.dadosLocalStorage = await this.localStorageService.getItem(
      'respostaSalva'
    );
    console.log('resposta capturada do localStorage', this.dadosLocalStorage);
    this.questoes = this.dadosLocalStorage.questoes;
  }
}
