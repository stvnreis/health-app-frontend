"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";

import { ExerciciosList } from "./components/exercicios-list";
import { CadastrarExercicioModal } from "./components/cadastrar-exercicio-modal";

import { PageTitle } from "@/components/page-title";
import api from "@/lib/api";
import { Exercicio } from "@/types";

export default function ExerciciosPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [exercicios, setExercicios] = useState<Exercicio[]>([]);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const getExercicios = async () => {
      api
        .fetch<Exercicio[]>({ path: "exercicio" })
        .then((data) => setExercicios(data));
    };

    getExercicios();
  }, [reload]);

  return exercicios && Array.isArray(exercicios) ? (
    <main>
      <div className="flex justify-between">
        <PageTitle value="Exercícios" />
        <Button color="primary" onPress={onOpen}>
          Cadastrar
        </Button>
      </div>

      <ExerciciosList data={exercicios} />
      <CadastrarExercicioModal
        isOpen={isOpen}
        reload={reload}
        setReload={setReload}
        onOpenChange={onOpenChange}
      />
    </main>
  ) : (
    <></>
  );
}
