"use client";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";

interface ICustomModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function CustomModal({
  title,
  children,
  isOpen,
  onClose,
}: ICustomModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={() => onClose()}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-black" as="h2">
          {title}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
