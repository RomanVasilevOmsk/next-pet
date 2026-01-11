"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";

const Title = () => {
  const pathname = usePathname();
  const currentNavItem = siteConfig.navItems.find(
    (item) => item.href === pathname,
  );
  return (
    <h1 className="text-2xl font-bold text-center">
      {currentNavItem?.label || "Главная"}
    </h1>
  );
};

export default Title;
