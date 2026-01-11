"use client";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  addToast,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";
import RegistrationModal from "../modals/registration.modal";
import LoginModal from "../modals/login.modal";
import { useState } from "react";
import { signOutAction } from "@/actions/signOut";
import { useAuthStore } from "@/store/auth.store";
import { Session } from "next-auth";

export const Logo = () => {
  return (
    <Image src="/logo.png" alt="Next PET" width={48} height={48} priority />
  );
};

export default function Header() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const {
    isAuth,
    status: sessionStatus,
    session,
    setAuthState,
  } = useAuthStore();
  const pathname = usePathname();

  const getNavItems = () => {
    const isActive = (href: string) => pathname === href;

    return siteConfig.navItems.map((link) => (
      <NavbarItem key={link.href} isActive={isActive(link.href)}>
        <Link
          color="foreground"
          href={link.href}
          className={`px-2 py-1 ${
            isActive(link.href) ? "text-primary" : "text-foreground"
          } duration-300 transition-colors`}
        >
          {link.label}
        </Link>
      </NavbarItem>
    ));
  };

  const handleSignOut = async () => {
    try {
      const res = await signOutAction();
      if (res.error) {
        throw new Error(res.error);
      }
      addToast({
        title: "Вы успешно вышли из системы",
        description: "Вы успешно вышли из системы",
        color: "success",
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      addToast({
        title: "Что - то пошло не так",
        description: "Что - то пошло не так",
        color: "danger",
      });
    } finally {
      setAuthState("unauthenticated", null as Session | null);
    }
  };

  return (
    <Navbar style={{ height: `${layoutConfig.headerHeight}` }}>
      <NavbarBrand>
        <div className="flex items-center gap-1">
          <Link href="/">
            <Logo />
          </Link>
          <p className="font-bold text-inherit">Next </p>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>

      <NavbarContent justify="end">
        {sessionStatus === "loading" ? (
          <NavbarContent justify="center">
            <p>Loading...</p>
          </NavbarContent>
        ) : isAuth ? (
          <>
            <p>Привет {session?.user?.email}</p>
            <NavbarItem className="hidden lg:flex">
              <Button
                as={Link}
                color="primary"
                className="px-2 py-1 duration-300 transition-colors"
                onPress={handleSignOut}
              >
                Выйти
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link
                href="#"
                className="px-2 py-1 duration-300 transition-colors"
                onPress={() => setIsLoginModalOpen(true)}
              >
                Войти
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="#"
                variant="flat"
                className="px-2 py-1 duration-300 transition-colors"
                onPress={() => setIsRegistrationModalOpen(true)}
              >
                Зарегестрироваться
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(!isRegistrationModalOpen)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(!isLoginModalOpen)}
      />
    </Navbar>
  );
}
