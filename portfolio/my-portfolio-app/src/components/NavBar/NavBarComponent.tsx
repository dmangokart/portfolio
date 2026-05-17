"use client";

import { cn } from "@/lib/utils";
import NavLogoComponent from "../NavLogoComponent/NavLogoComponent";
import { ThemeToggle } from "../ui/ThemeToggleUI";
import "./NavBarComponent.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experiences" },
  { label: "Projects", href: "#projects" },
  { label: "Open Source", href: "#open-source" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          <NavLogoComponent />
        </a>

        <div className="navbar-nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn("navbar-link", "navbar-link-inactive")}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
