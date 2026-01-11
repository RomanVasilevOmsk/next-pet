"use client";

import CustomModal from "@/components/common/modal";
import RegistrationForm from "@/forms/registration.form";

interface IRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
}: IRegistrationModalProps) {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Регистрация">
      <RegistrationForm onClose={onClose} />
    </CustomModal>
  );
}
