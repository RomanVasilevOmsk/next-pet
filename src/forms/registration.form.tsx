"use client";
import React from "react";
import { Form, Input, Button, addToast } from "@heroui/react";
import { IFormData } from "@/types/formData";
import { registerUser } from "@/actions/register";

interface IRegistrationFormProps {
  onClose?: () => void;
}

export default function RegistrationForm({ onClose }: IRegistrationFormProps) {
  const [formData, setFormData] = React.useState<IFormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await registerUser(formData);
    console.log("result", result);

    if (result && "error" in result) {
      addToast({
        title: "Не удалось создать пользователя",
        description:
          "Возможно такой пользователь уже существует или что - то пошло не так",
        color: "danger",
      });
    } else {
      addToast({
        title: "Пользователь успешно создан",
        description: "Пользователь успешно создан",
        color: "success",
      });
    }

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
          if (!val.includes("@")) return "Емейл не валидный";
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
        value={formData.password}
        validate={(val) => {
          if (!val) return "Пароль обязательное поле";
          if (val.length < 6) return "Пароль должен быть не менее 6 символов";
          return true;
        }}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <Input
        isRequired
        errorMessage="Пожалуйста, введите подтверждение пароля"
        label="Подтверждение пароля"
        labelPlacement="inside"
        name="confirmPassword"
        placeholder="Введите ваш подтверждение пароля"
        type="password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        validate={(val) => {
          if (!val) return "Подтверждение пароля обязательное поле";
          if (val !== formData.password)
            return "Подтверждение пароля не совпадает";
          return true;
        }}
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
          Зарегистрироваться
        </Button>
      </div>
    </Form>
  );
}
