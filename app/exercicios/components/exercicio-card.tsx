"use client";

import { Card, CardBody } from "@nextui-org/card";
import { useDisclosure } from "@nextui-org/modal";

import { ExercicioExecucaoModal } from "./exercicio-execucao-modal";

import { Exercicio } from "@/types";

interface ExercicioCardProps {
  data: Exercicio;
}

export function ExercicioCard({ data }: ExercicioCardProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card isPressable className="bg-primary-400" onPress={onOpen}>
        <CardBody className="flex gap-3 items-center">
          <label className="w-fit text-center">{data.dsExercicio}</label>
        </CardBody>
      </Card>
      <ExercicioExecucaoModal
        data={data}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
