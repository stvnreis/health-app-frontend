"use client";

import { useState } from "react";
import { Modal, ModalContent } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import { Exercicio, ExercicioExecucao } from "@/types";
import api from "@/lib/api";

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
    qtRepeticao: 0,
    vlCarga: 0,
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
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <div className="p-10">
            <div>
              <div className="flex flex-col gap-5">
                <Input
                  label="Carga utilizada"
                  value={execucao.vlCarga.toString()}
                  onChange={(e) => handleEdit("vlCarga", e.target.value)}
                />
                <Input
                  label="Quantidade de repetições"
                  type="number"
                  value={execucao.qtRepeticao.toString()}
                  onChange={(e) => handleEdit("qtRepeticao", e.target.value)}
                />
              </div>
            </div>

            <div className="mt-5 gap-2 flex justify-end">
              <Button
                color="danger"
                onClick={() => {
                  handleClose();
                  onClose();
                }}
              >
                Fechar
              </Button>
              <Button
                color="primary"
                isLoading={isSaving}
                variant="ghost"
                onClick={() => {
                  onSave();
                  onClose();
                }}
              >
                Salvar
              </Button>
            </div>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
}
