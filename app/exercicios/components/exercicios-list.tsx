import { Card, CardBody } from "@nextui-org/card";

import { ExercicioCard } from "./exercicio-card";

import { Exercicio } from "@/types";

export function ExerciciosList({ data }: { data: Exercicio[] }) {
  return (
    <Card>
      <CardBody className="h-1/2flex flex-col gap-1 md:grid md:grid-cols-4 overflow-hidden">
        {data.map((exercicio) => (
          <ExercicioCard key={exercicio.idExercicio} data={exercicio} />
        ))}
      </CardBody>
    </Card>
  );
}
