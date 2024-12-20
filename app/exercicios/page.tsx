"use client";

import { useEffect, useState } from "react";

import { ExerciciosList } from "./components/exercicios-list";

import { PageTitle } from "@/components/page-title";
import api from "@/lib/api";
import { Exercicio } from "@/types";

export default function ExerciciosPage() {
  const [exercicios, setExercicios] = useState<Exercicio[]>([]);

  useEffect(() => {
    const getExercicios = async () => {
      api
        .fetch<Exercicio[]>({ path: "exercicio" })
        .then((data) => setExercicios(data));
    };

    getExercicios();
  }, []);

  return exercicios && Array.isArray(exercicios) ? (
    <main>
      <PageTitle value="Exercícios" />
      <ExerciciosList data={exercicios} />
    </main>
  ) : (
    <></>
  );
}
