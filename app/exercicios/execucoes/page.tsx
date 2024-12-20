import moment from "moment";

import { ExercicioAccordion } from "./exercicios-accordion";

import api from "@/lib/api";
import { Exercicio } from "@/types";

export default async function ExercicioExecucoesPage() {
  const exercicios = await api.fetch<Exercicio[]>({
    path: `exercicio/execucoes?dtInicio=${moment().utcOffset(0, true).startOf("day").toISOString()}&dtFim=${moment().utcOffset(0, true).endOf("day").toISOString()}`,
  });

  return <ExercicioAccordion data={exercicios} />;
}
