"use client";

import moment from "moment";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { useEffect, useState } from "react";
import { getLocalTimeZone, parseDate } from "@internationalized/date";
import { DatePicker } from "@nextui-org/date-picker";

import { ExercicioAccordion } from "./exercicios-accordion";

import { PageTitle } from "@/components/page-title";
import { Exercicio } from "@/types";
import api from "@/lib/api";

export default function ExercicioExecucoesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [exercicios, setExercicios] = useState<Exercicio[]>([]);
  const [selectedDate, setSelectedDate] = useState(
    parseDate(moment(new Date()).format("YYYY-MM-DD")),
  );

  useEffect(() => {
    const getExercicios = async () => {
      setIsLoading(true);
      const data = await api.fetch<Exercicio[]>({
        path: `exercicio/execucoes?dtInicio=${moment(selectedDate.toDate(getLocalTimeZone())).utcOffset(0, true).startOf("day").toISOString()}&dtFim=${moment(selectedDate.toDate(getLocalTimeZone())).utcOffset(0, true).endOf("day").toISOString()}`,
      });

      setExercicios(data);
      setIsLoading(false);
    };

    getExercicios();
  }, [selectedDate]);

  return (
    <main>
      <PageTitle value="Exercicios realizados" />
      <Card>
        <CardHeader className="flex justify-between">
          <DatePicker
            disableAnimation
            label="data do treino"
            value={selectedDate}
            onChange={(value) =>
              setSelectedDate(
                value ?? parseDate(moment(new Date()).format("YYYY-MM-DD")),
              )
            }
          />
        </CardHeader>
        <CardBody>
          {Array.isArray(exercicios) && exercicios.length ? (
            <ExercicioAccordion data={exercicios} />
          ) : isLoading ? (
            <>Carregando</>
          ) : (
            <>Nenhum Exercício realizado no período informado</>
          )}
        </CardBody>
      </Card>
    </main>
  );
}
