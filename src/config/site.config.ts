export const siteConfig = {
  title: "Next PET",
  description: "test app on Next.js",
  navItems: [
    { href: "/", label: "Рецепты" },
    { href: "/ingredients", label: "Ингредиенты" },
    { href: "/about", label: "О нас" },
  ],
  pageContent: {
    "/": {
      content: "Главная страница",
    },
    "/about": {
      content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p>Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.</p>`,
    },
    "/ingredients": {
      content: "Ингридиенты",
    },
    "/recipes": {
      content: "Рецепты",
    },
  },
};
