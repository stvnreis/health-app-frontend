export type Exercicio = {
  idExercicio: number;
  dsExercicio: string;
  execucoes?: ExercicioExecucao[];
};

export type ExercicioExecucao = {
  idExercicio: number;
  vlCarga: number | null;
  qtRepeticao: number | null;
  nrSequencia: number;
};
