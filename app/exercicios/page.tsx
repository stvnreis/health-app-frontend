import { ExercicioCard } from "./components/exercicio-card";

import { PageTitle } from "@/components/page-title";
import api from "@/lib/api";

export default async function ExerciciosPage() {
  const exercicios = await api.fetch({ path: "exercicio" });

  return exercicios && Array.isArray(exercicios) ? (
    <main>
      <PageTitle value="Exercícios" />
      <section className="flex flex-col gap-5 md:grid md:grid-cols-4">
        {exercicios.map((exercicio) => (
          <ExercicioCard key={exercicio.idExercicio} data={exercicio} />
        ))}
      </section>
    </main>
  ) : (
    <></>
  );
}
