"use client";

import { Exercicio } from "@/types";

export let exercicios: Exercicio[] = [];

export function clearExercicios() {
  exercicios = [];
}

export function addExercicio(exercicio: Exercicio) {
  exercicios.push(exercicio);
}
