import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeminiResponse } from '../_models/geminiResponse';
import { GeminiSend } from '../_models/geminiSend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiGeminiService {
  apiUrl: string = 'http://127.0.0.1:8000/quiz/gerar-questao/';
  constructor(private http: HttpClient) {}

  enviarDados(dados: GeminiSend){

    return this.http.post<GeminiResponse>(
      this.apiUrl,
      dados
    );
  }
}
