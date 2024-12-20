"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { Exercicio } from "@/types";

export function ExercicioAccordion({ data }: { data: Exercicio[] }) {
  return (
    <Accordion variant="shadow">
      {data.map((exercicio) => (
        <AccordionItem
          key={exercicio.idExercicio}
          title={exercicio.dsExercicio}
        >
          {exercicio.execucoes?.map((execucao) => (
            <div key={execucao.nrSequencia}>
              Série: {execucao.nrSequencia} | Carga: {execucao.vlCarga} |
              Repetições: {execucao.qtRepeticao}
              <br />
            </div>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
