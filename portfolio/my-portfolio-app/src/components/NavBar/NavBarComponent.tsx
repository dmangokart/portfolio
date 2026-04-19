"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import NavLogoComponent from "../NavLogoComponent/NavLogoComponent";
import { ThemeToggle } from "../ui/ThemeToggleUI";
import "./NavBarComponent.css";

const navItems = [
  { label: "About Me", href: "/about" },
  { label: "Experiences", href: "/experiences" },
  { label: "Projects", href: "/projects" },
  { label: "Open Source", href: "/open-source" },
  { label: "Contact Me", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo - constrained width */}
        <Link href="/" className="navbar-logo">
          <NavLogoComponent />
        </Link>

        {/* Navigation items */}
        <div className="navbar-nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "navbar-link",
                  isActive ? "navbar-link-active" : "navbar-link-inactive",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
