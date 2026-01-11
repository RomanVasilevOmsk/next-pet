"use client";
import React from "react";
import { Form, Input, Button } from "@heroui/react";
import { signInWithCredentials } from "@/actions/signIn";

interface ILoginFormProps {
  onClose?: () => void;
}

export default function LoginForm({ onClose }: ILoginFormProps) {
  const [formData, setFormData] = React.useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signInWithCredentials(formData.email, formData.password);

    window.location.reload();

    onClose?.();
  };

  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <Input
        isRequired
        errorMessage="Пожалуйста, введите емейл"
        label="Емейл"
        labelPlacement="inside"
        name="email"
        placeholder="Введите ваш емейл"
        type="email"
        className="text-black"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(val) => {
          if (!val) return "Емейл обязательное поле";
          return true;
        }}
      />
      <Input
        isRequired
        errorMessage="Пожалуйста, введите пароль"
        label="Пароль"
        labelPlacement="inside"
        name="password"
        placeholder="Введите ваш пароль"
        type="password"
        className="text-black"
        value={formData.password}
        validate={(val) => {
          if (!val) return "Пароль обязательное поле";
          if (val.length < 6) return "Пароль должен быть не менее 6 символов";
          return true;
        }}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <div className="flex justify-center gap-2 w-full mb-2 mt-2">
        <Button
          type="button"
          variant="bordered"
          onPress={onClose}
          className="text-black"
        >
          Отмена
        </Button>
        <Button type="submit" variant="bordered" className="text-black">
          Войти
        </Button>
      </div>
    </Form>
  );
}
