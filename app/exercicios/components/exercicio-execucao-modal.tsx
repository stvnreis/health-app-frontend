"use client";

import { useState } from "react";
import { Input } from "@nextui-org/input";

import { Exercicio, ExercicioExecucao } from "@/types";
import api from "@/lib/api";
import { Modal } from "@/components/modal";

export interface ExercicioExecucaoModalProps {
  data: Exercicio;
  isOpen: boolean;
  onOpenChange: () => void;
}

export function ExercicioExecucaoModal({
  data,
  isOpen,
  onOpenChange,
}: ExercicioExecucaoModalProps) {
  const execucaoVazia = {
    idExercicio: data.idExercicio,
    qtRepeticao: null,
    vlCarga: null,
    nrSequencia: 0,
  };
  const [execucao, setExecucao] = useState<ExercicioExecucao>(execucaoVazia);
  const [isSaving, setIsSaving] = useState(false);

  function handleEdit(key: keyof ExercicioExecucao, value: string) {
    setExecucao({ ...execucao, [key]: value });
  }

  function handleClose() {
    setExecucao(execucaoVazia);
  }

  async function onSave() {
    setIsSaving(true);

    await api.save("exercicio/executar", execucao);

    setIsSaving(false);
  }

  return (
    <Modal
      handleClose={handleClose}
      handleSave={onSave}
      isOpen={isOpen}
      isSaving={isSaving}
      title={`Registrar ${data.dsExercicio.toLocaleLowerCase()}`}
      onOpenChange={onOpenChange}
    >
      <div className="flex flex-col gap-5">
        <Input
          label="Carga utilizada"
          value={execucao.vlCarga ? execucao.vlCarga.toString() : ""}
          onChange={(e) => handleEdit("vlCarga", e.target.value)}
        />
        <Input
          label="Quantidade de repetições"
          type="number"
          value={execucao.qtRepeticao ? execucao.qtRepeticao.toString() : ""}
          onChange={(e) => handleEdit("qtRepeticao", e.target.value)}
        />
      </div>
    </Modal>
  );
}
