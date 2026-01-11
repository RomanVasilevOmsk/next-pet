"use client";
import CustomModal from "@/components/common/modal";
import LoginForm from "@/forms/login.form";

interface ILoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: ILoginModalProps) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Войти">
      <LoginForm onClose={onClose} />
    </CustomModal>
  );
};

export default LoginModal;
