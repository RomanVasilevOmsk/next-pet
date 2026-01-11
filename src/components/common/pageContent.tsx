"use client";

import DOMPurify from "isomorphic-dompurify";
import { siteConfig } from "@/config/site.config";
import { usePathname } from "next/navigation";
import parse from "html-react-parser";

export const PageContent = () => {
  const pathname = usePathname();
  const pageContent = siteConfig.pageContent[
    pathname as keyof typeof siteConfig.pageContent
  ] || { content: "" };

  if (!pageContent.content) {
    return <div>Нет контента для этой страницы</div>;
  }

  const cleanHtml = DOMPurify.sanitize(pageContent.content);

  return <div className="text-lg">{parse(cleanHtml)}</div>;
};
