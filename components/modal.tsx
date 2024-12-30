import { Button } from "@nextui-org/button";
import {
  Modal as NextUiModal,
  ModalContent,
  ModalFooter,
} from "@nextui-org/modal";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode | ReactNode[];
  isOpen: boolean;
  onOpenChange: () => void;
  handleClose?: () => void;
  handleSave: () => void;
  isSaving?: boolean;
  title?: string;
}

export function Modal({
  children,
  isOpen,
  onOpenChange,
  handleClose,
  handleSave,
  isSaving,
  title,
}: ModalProps) {
  return (
    <NextUiModal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <div className="p-10 flex flex-col gap-5">
            <h1 className="text-xl font-bold">{title}</h1>
            {children}{" "}
            <div className="flex gap-3 justify-end">
              <Button
                color="danger"
                onPress={
                  typeof handleClose === "function"
                    ? () => {
                        handleClose();
                        onClose();
                      }
                    : onClose
                }
              >
                Fechar
              </Button>
              <Button
                color="primary"
                isLoading={isSaving ?? false}
                variant="ghost"
                onPress={() => {
                  handleSave();
                  onClose();
                }}
              >
                Salvar
              </Button>
            </div>
          </div>
        )}
      </ModalContent>
      <ModalFooter />
    </NextUiModal>
  );
}
