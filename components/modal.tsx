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
}

export function Modal({
  children,
  isOpen,
  onOpenChange,
  handleClose,
  handleSave,
}: ModalProps) {
  return (
    <NextUiModal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <div className="p-10">
            {children}{" "}
            <div className="flex justify-end">
              <Button
                color="danger"
                onClick={
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
                variant="ghost"
                onClick={() => {
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
