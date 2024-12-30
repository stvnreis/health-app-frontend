import { ChangeEvent, useState } from "react";
import { Input } from "@nextui-org/input";

import { Modal } from "@/components/modal";
import api from "@/lib/api";

export function CadastrarExercicioModal({
  isOpen,
  onOpenChange,
  setReload,
  reload,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  reload: number;
  setReload: (value: number) => void;
}) {
  const [isSaving, setIsSaving] = useState(false);
  const [dsExercicio, setDsExercicio] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setDsExercicio(e.target.value);
  }

  async function onSave() {
    setIsSaving(true);
    await api.save("exercicio", { dsExercicio });
    setReload(reload + 1);
    setIsSaving(false);
  }

  return (
    <Modal
      handleSave={onSave}
      isOpen={isOpen}
      isSaving={isSaving}
      title="Cadastrar novo exercício"
      onOpenChange={onOpenChange}
    >
      <Input
        label="Nome do exercício"
        value={dsExercicio}
        onChange={handleChange}
      />
    </Modal>
  );
}
