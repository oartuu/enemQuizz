export interface GeminiResponse {
  questoes: Quest[];
}

export interface Quest {
  questao: string;
  enunciado: string;
  alternativas: Alternativas;
  alternativaCorreta: string;
}

export interface Alternativas {
  a: string;
  b: string;
  c: string;
  d: string;
}
