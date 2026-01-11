"use client";

// import { Metadata } from "next";
import { Button, Link } from "@heroui/react";

// export const metadata: Metadata = {
//   title: "Страница не найдена",
//   description: "Страница не найдена",
// };

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center font-sans dark:bg-black h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <h1 className="text-2xl font-bold mb-4">Страница не найдена</h1>

      <Button
        as={Link}
        color="primary"
        href="/"
        variant="flat"
        className="mt-4"
      >
        На главую
      </Button>
    </div>
  );
};

export default NotFoundPage;
